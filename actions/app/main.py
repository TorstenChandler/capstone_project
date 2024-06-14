import os
from fastapi import FastAPI,Request
from pydantic import BaseModel
from fastapi.encoders import jsonable_encoder
from fastapi.responses import JSONResponse
import time
import psycopg
from typing import List
#from transformers import pipeline

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
    emotions = emotions(entry)
    topics = topics(entry)
    embedding(entry, emotions,topics)
    return JSONResponse(jsonable_encoder({"recived": True}))

def emotions(entry):
    emotions = (entry.id,0.1,0.2, 0.3,0.4, 0.5,0.6, 0.7,0.8, 0.9,0.10, 0.11)
    time.sleep(1)
    with psycopg.connect(get_conn_str()) as conn:
        with conn.cursor() as cur:
            # Insert data into the table
            # column names need to be ordered in accordance to output of classifier!
            insert_query = '''
            INSERT INTO emotion (id, anger, anticipation, disgust, fear, joy,love,optimism,pessimism,sadness,surprise,trust) VALUES (%s, %s,%s, %s,%s, %s,%s, %s,%s, %s,%s, %s)
            '''
            cur.execute(insert_query, emotions)
            
            # Commit the transaction
            conn.commit()

def topics(entry):
    pass

def embedding(entry,emotions,topics):
    to_be_vectorized = f"date: {entry.date}, topics:[entry.]"
    pass