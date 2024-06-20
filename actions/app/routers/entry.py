import psycopg
from ..dependencies import get_conn_str
from fastapi import APIRouter,Request, BackgroundTasks
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
async def entry_inserted(entry:Entry,background_tasks: BackgroundTasks):
    background_tasks.add_task(process,entry)
    return JSONResponse(jsonable_encoder({"received": True}))

async def process(entry):
    emotions = classify_emotions(entry)
    topics = classify_topics(entry)
    #embedding(entry, emotions,topics)

def classify_emotions(entry):
    classifier = pipeline(model="Dimi-G/roberta-base-emotion", top_k=None)
    emotions = classifier(entry.text)

    #function to sort the order of the dictionary output
    def order_labels(emotions):
        labels_order = ['anger', 'fear', 'joy', 'love', 'sadness', 'surprise']
        order_dict = {label: index for index, label in enumerate(labels_order)}
        # Sort based on the desired order
        ordered_output = sorted(emotions, key=lambda x: order_dict[x['label'].lower()]) 
        return ordered_output 
    
    ordered_emotions = order_labels(emotions)

    emotionValues = []
    emotionLabels = []
    for emotion in ordered_emotions:
        emotionLabels.append(emotion["label"])
        emotionValues.append(emotion["score"])
    emotionLabels = ','.join(emotionLabels)
    with psycopg.connect(get_conn_str()) as conn:
        with conn.cursor() as cur:
            # Insert data into the table
            # column names need to be ordered in accordance to output of classifier!
            insert_query = f'''
            INSERT INTO emotion (id, {emotionLabels}) VALUES (%s, %s,%s, %s,%s, %s)
            '''
            cur.execute(insert_query, tuple([entry.id] + emotionValues))
            
            # Commit the transaction
            conn.commit()
    return emotions

def classify_topics(entry):
    classifier = pipeline("zero-shot-classification", model="eleldar/theme-classification")
    topics = classifier(entry.text, ['friends', 'goals', 'hobby', 'relation', 'work'])
    
    #bringing the classifier results in the desired order and format
    results = {}
    for result in zip(topics['labels'], topics['scores']):
        results[result[0]] = result[1]
    
    def remap_dict(results, desired_order):
        sorted_results = {key:results[key] for key in desired_order }
        return sorted_results

    desired_order = ['friends', 'goals', 'hobby', 'relation', 'work']
    sorted_results = remap_dict(results, desired_order)
    labels = ','.join(sorted_results.keys())
    topic_values = list(sorted_results.values())

    with psycopg.connect(get_conn_str()) as conn:
        with conn.cursor() as cur:
            # Insert data into the table
            # column names need to be ordered in accordance to output of classifier!
            insert_query = f'''
            INSERT INTO topic (id, {labels}) VALUES (%s, %s,%s, %s,%s, %s)
            '''
            cur.execute(insert_query, tuple([entry.id]+ topic_values))
                    
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