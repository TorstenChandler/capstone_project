
from ..dependencies import get_conn_str
from fastapi import APIRouter,Request,BackgroundTasks
from fastapi.encoders import jsonable_encoder
from fastapi.responses import JSONResponse
from pydantic import BaseModel
from transformers import pipeline
from langchain_community.embeddings import OllamaEmbeddings
from langchain_core.prompts import ChatPromptTemplate
from langchain_postgres import PGVector
from langchain_postgres.vectorstores import DistanceStrategy
from langchain_community.llms import Ollama
from langchain_core.runnables.history import RunnableWithMessageHistory
from langchain_core.chat_history import BaseChatMessageHistory
from langchain_community.chat_message_histories import ChatMessageHistory
from uuid import uuid4
from threading import Thread
import psycopg2


class Entry(BaseModel):
    id: str
    user_id: int
    text: str
    date: str

router = APIRouter()
@router.post("/entry_inserted")
async def entry_inserted(entry:Entry,background_tasks: BackgroundTasks):
    background_tasks.add_task(process,entry)
    return JSONResponse(jsonable_encoder({"received": True}))

def process(entry):
    emotions = classify_emotions(entry)
    #topics = classify_topics(entry)
    #embedding(entry, emotions,topics)
   

router = APIRouter()
@router.post("/entry_inserted")
async def entry_inserted(request:Request, entry:Entry):
    Thread(target=process, args=(entry,)).start()
    return JSONResponse(jsonable_encoder({"received": True}))


def classify_emotions(entry):
   
    #classifier = pipeline(model="Dimi-G/roberta-base-emotion", top_k=None)
    #emotions = classifier(entry.text)
#
    ##function to sort the order of the dictionary output
    #def order_labels(emotions):
    #    labels_order = ['anger', 'fear', 'joy', 'love', 'sadness', 'surprise']
    #    order_dict = {label: index for index, label in enumerate(labels_order)}
    #    # Sort based on the desired order
    #    ordered_output = sorted(emotions[0], key=lambda x: order_dict[x['label'].lower()]) 
    #    return ordered_output 
    #
    #ordered_emotions = order_labels(emotions)

    conn = psycopg2.connect(get_conn_str())
    cursor = conn.cursor()
    classifier = pipeline("text-classification", model="Dimi-G/roberta-base-emotion", top_k=None)
    emotions = classifier(entry.text)[0]
    emotionValues = []
    emotionLabels = []
    for emotion in emotions:
        emotionLabels.append(emotion["label"])
        emotionValues.append(emotion["score"])
    emotionLabels = ','.join(emotionLabels)
   
    insert_query = f'''
    INSERT INTO emotion (id, {emotionLabels}) VALUES (%s , %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s)
    '''
    cursor.execute(insert_query, tuple([entry.id] + emotionValues))
    conn.commit()
    return emotions
def classify_topics(entry):
    conn = psycopg2.connect(get_conn_str())
    cursor = conn.cursor()
    classifier = pipeline("zero-shot-classification", model="eleldar/theme-classification")
    topics = classifier(entry.text, ['friends', 'relation', 'work', "hobby", "goals"])
    labels = ",".join(topics["labels"])
    
    insert_query = f'''
    INSERT INTO topic (id, {labels}) VALUES (%s,%s,%s,%s,%s,%s)
    '''
    cursor.execute(insert_query, tuple([entry.id]) + tuple(topics["scores"]))
    conn.commit()
    return topics


#def embedding(entry, emotions, topics):
#    embedding_text = f"date: {entry.date}; emotions:{emotions}, topics:{topics} text:{entry.text}"
#    engine = OllamaEmbeddings(model='llama3')
#    vectorized = engine.embed_query(embedding_text)
#    with psycopg.connect(get_conn_str()) as conn:
#        with conn.cursor() as cur:
#            # Insert data into the table
#            insert_query = '''
#                UPDATE entry set embedding_text = %s, embedding = %s  where id = %s (%s, %s, %s)
#            '''
#            cur.execute(insert_query, (embedding_text, vectorized, entry.id))      
#            # Commit the transaction
#            conn.commit()
#            
#    #close the connection
#    conn.close()
