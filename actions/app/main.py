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
import pandas as pd
from dotenv import load_dotenv
from langchain_community.embeddings import OllamaEmbeddings
from rag_model import ask_rag, populate_vector_table


def get_conn_str():
    load_dotenv()

    connection_str = f"""
        dbname={os.getenv('POSTGRES_DB')} 
        user={os.getenv('POSTGRES_USER')} 
        password={os.getenv('POSTGRES_PASSWORD')} 
        host={os.getenv('POSTGRES_HOST')} 
        port={os.getenv('POSTGRES_PORT')} 
    """
    
    return connection_str

app = FastAPI()


class Entry(BaseModel):
    id: str
    user_id: int
    text: str
    date: str




@app.post("/new_entry")
async def new_entry(entry:Entry):
    #@TODO SAVE ENTRY TO DATABASE
    insert_entry_with_embedding(entry)
    #@TODO CHAT RESPONSE
    return JSONResponse(jsonable_encoder({"message": "SAD TO HEAR..."}))


@app.post("/ask")
def ask(request:Request, user_id, question:str):
    answer = ask_rag(user_id, question)
    return JSONResponse(jsonable_encoder({"answer": answer}))

@app.post("/timeline/emotions")
async def emotions(request:Request):
    body = await request.json()
    entries = []
    series = []
        
    labels = ["joy", "love", "optimism", "trust","surprise","anticipation","sadness","anger","disgust", "fear","pessimism"]
    with psycopg.connect(get_conn_str()) as conn:
        with conn.cursor() as cur:
            # Insert data into the table
            # column names need to be ordered in accordance to output of classifier!
            load_query = f'''
             SELECT emotion.id, 
                    emotion.joy, 
                    emotion.love, 
                    emotion.optimism, 
                    emotion.trust, 
                    emotion.surprise, 
                    emotion.anticipation,
                    emotion.sadness,
                    emotion.anger,
                    emotion.disgust,
                    emotion.fear,
                    emotion.pessimism
                FROM emotion
                JOIN entry ON emotion.id = entry.id
                WHERE entry.user_id = %s
                ORDER BY entry.date;
            '''
            print(body["session_variables"])
            cur.execute(load_query, (body["session_variables"]["x-hasura-user-id"],))
            
            # Commit the transaction
            emotions = cur.fetchall()
            entries = [emotion[0] for emotion in emotions]
            for i in range(len(labels)):
                series.append({"name":labels[i], "data": [emotion[i+1] for emotion in emotions]})
            return JSONResponse(jsonable_encoder({"entries":entries, "series":series}))

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

def get_embedding(text: str) -> list[float]:
    embeddings = OllamaEmbeddings(model='llama3')
    return embeddings.embed_query(text)

def insert_entry_with_embedding(entry):
    with psycopg.connect(get_conn_str()) as conn:
        with conn.cursor() as cur:
            # Insert data into the table
            embedding_text = f"date: {entry.date}; text:{entry.text}"
            insert_query = '''
                INSERT INTO entry (id, user_id, text, date, embedding_text, embedding) VALUES (%s, %s, %s, %s, %s, %s)
            '''
            cur.execute(insert_query, (entry.id, entry.user_id, entry.text, entry.date, embedding_text, get_embedding(embedding_text)))
                    
            # Commit the transaction
            conn.commit()
            
    #close the connection
    conn.close()


    
