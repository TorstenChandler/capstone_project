import psycopg
from ..dependencies import get_conn_str
from fastapi import APIRouter,Request
from fastapi.encoders import jsonable_encoder
from fastapi.responses import JSONResponse
from threading import Thread
from pydantic import BaseModel
import asyncio
from transformers import pipeline

class Entry(BaseModel):
    id: str
    user_id: int
    text: str
    date: str

router = APIRouter()
@router.post("/entry_inserted")
async def entry_inserted(entry:Entry):
    asyncio.create_task(process(entry))
    return JSONResponse(jsonable_encoder({"received": True}))

async def process(entry):
    emotions = classify_emotions(entry)
    topics = classify_topics(entry)
    #embedding(entry, emotions,topics)

def classify_emotions(entry):
    classifier = pipeline("text-classification", model="cardiffnlp/twitter-roberta-base-emotion-multilabel-latest", top_k=None)
    emotions = classifier(entry.text)[0]
    emotionValues = []
    emotionLabels = []
    for emotion in emotions:
        emotionLabels.append(emotion["label"])
        emotionValues.append(emotion["score"])
    emotionLabels = ','.join(emotionLabels)
    with psycopg.connect(get_conn_str()) as conn:
        with conn.cursor() as cur:
            # Insert data into the table
            # column names need to be ordered in accordance to output of classifier!
            insert_query = f'''
            INSERT INTO emotion (id, {emotionLabels}) VALUES (%s, %s,%s, %s,%s, %s,%s, %s,%s, %s,%s, %s)
            '''
            cur.execute(insert_query, tuple([entry.id] + emotionValues))
            
            # Commit the transaction
            conn.commit()
    return emotions

def classify_topics(entry):
    classifier = pipeline("zero-shot-classification", model="eleldar/theme-classification")
    topics = classifier(entry.text, ['friends', 'relation', 'work', "hobby", "goals"])
    labels = ",".join(topics["labels"])
    with psycopg.connect(get_conn_str()) as conn:
        with conn.cursor() as cur:
            # Insert data into the table
            # column names need to be ordered in accordance to output of classifier!
            insert_query = f'''
            INSERT INTO topic (id, {labels}) VALUES (%s, %s,%s, %s,%s, %s)
            '''
            cur.execute(insert_query, tuple([entry.id]) + tuple(topics["scores"]))
            
            # Commit the transaction
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