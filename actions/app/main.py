import os
from fastapi import FastAPI,Request
from pydantic import BaseModel
from fastapi.encoders import jsonable_encoder
from fastapi.responses import JSONResponse
import psycopg
from typing import List
from transformers import pipeline

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


@app.post("/entry_inserted")
async def entry_inserted(entry:Entry):
    #@TODOS: CALCULATE EMOTIONS AND TOPICS AND INSERT IN TABLES
    emotionsModel = pipeline("text-classification", model="cardiffnlp/twitter-roberta-base-emotion-multilabel-latest", return_all_scores=True)
    detectedEmotions =  emotionsModel(entry.text)[0]
    emotions =  tuple(item['value'] for item in detectedEmotions)
  
    with psycopg.connect(get_conn_str()) as conn:
        with conn.cursor() as cur:
            # Insert data into the table
            insert_query = '''
            INSERT INTO emotions (user_id, anger, anticipation, disgust, fear, joy,love,optimism,pessimism,sadness,surprise,trust) VALUES (%s, %s,%s, %s,%s, %s,%s, %s,%s, %s,%s, %s)
            '''
            cur.execute(insert_query, tuple(entry.user_id) + emotions)
            
            # Commit the transaction
            conn.commit()
    return JSONResponse(jsonable_encoder({"recived": True}))




