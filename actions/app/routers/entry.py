
from ..dependencies import get_conn_str
from fastapi import APIRouter,Request,BackgroundTasks
from fastapi.encoders import jsonable_encoder
from fastapi.responses import JSONResponse
from pydantic import BaseModel
from transformers import pipeline
from threading import Thread
import psycopg2
import logging
logging.basicConfig(level=logging.INFO)


class Entry(BaseModel):
    id: str
    user_id: int
    text: str
    date: str

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
    conn = psycopg2.connect(get_conn_str())
    cursor = conn.cursor()
    classifier = pipeline("text-classification", model="cardiffnlp/twitter-roberta-base-emotion-multilabel-latest", top_k=None)
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