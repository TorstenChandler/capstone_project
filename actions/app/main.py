import os
from fastapi import FastAPI,Request
from pydantic import BaseModel
from fastapi.encoders import jsonable_encoder
from fastapi.responses import JSONResponse
import time
import psycopg
from typing import List
from transformers import pipeline
from threading import Thread



def get_conn_str():
    return f"""
    dbname=db
    user=user
    password=password
    host=database
    port=5432
    """

app = FastAPI()


class Entry(BaseModel):
    id: str
    user_id: int
    text: str
    date: str


@app.post("/new_entry")
async def new_entry(entry:Entry):
    #@TODO SAVE ENTRY TO DATABASE
    return JSONResponse(jsonable_encoder({"message": "SAD TO HEAR..."}))



@app.post("/ask")
def ask(request:Request, question:str):
    return JSONResponse(jsonable_encoder({"answer": ""}))


@app.post("/entry_inserted")
def entry_inserted(entry:Entry):
    Thread(target=process, args=(entry,)).start()
    return JSONResponse(jsonable_encoder({"received": True}))

def process(entry):
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
    classifier = pipeline("zero-shot-classification", model="facebook/bart-large-mnli")
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

def embedding(entry,emotions,topics):
    to_be_vectorized = f"date: {entry.date}, topics:[entry.]"
    pass