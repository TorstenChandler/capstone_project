import psycopg
from ..dependencies import get_conn_str
from fastapi import APIRouter,Request, BackgroundTasks
from fastapi.encoders import jsonable_encoder
from fastapi.responses import JSONResponse
from threading import Thread
from pydantic import BaseModel
import asyncio
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

class Entry(BaseModel):
    id: str
    user_id: int
    text: str
    date: str

router = APIRouter()
@router.post("/entry_inserted")
async def entry_inserted(entry:Entry,background_tasks: BackgroundTasks):
    background_tasks.add_task(process,entry)
    response = generate_entry_response(entry.text)
    return JSONResponse(jsonable_encoder({"received": response}))

async def process(entry):
    emotions = classify_emotions(entry)
    topics = classify_topics(entry)
    embedding(entry, emotions,topics)


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

def embedding(entry, emotions, topics):
    embedding_text = f"date: {entry.date}; emotions:{emotions}, topics:{topics} text:{entry.text}"
    engine = OllamaEmbeddings(model='llama3')
    vectorized = engine.embed_query(embedding_text)
    with psycopg.connect(get_conn_str()) as conn:
        with conn.cursor() as cur:
           # Insert data into the table
            updated_query = '''
                UPDATE entry set embedding_text = %s, embedding = %s  where id = %s (%s, %s, %s)
            '''
            #cur.execute(insert_query, (embedding_text, vectorized, entry.id))  
            insert_query = '''
                     INSERT INTO entry (id, user_id, text, date, embedding_text, embedding) VALUES (%s, %s, %s, %s, %s, %s)
                '''
            cur.execute(insert_query, (entry.id, entry.user_id, entry.text, entry.date, embedding_text, vectorized))
                
           # Commit the transaction
            conn.commit()
           
   #close the connection
    conn.close()

def generate_entry_response(text):
    llm = Ollama(model="llama3",  base_url="http://host.docker.internal:11434", verbose=False)

    #Start a question answer chat prompt
    system_prompt = (
        """You are an emotionally intelligent assistant. You collect journal entries from users and respond in a empathetic way. 
        You do not ask questions, unless necessary. You reply in 2-3 sentences. """
    )

    prompt_template = ChatPromptTemplate.from_messages(
        [
            ("system", system_prompt),
            ("human", "{input}"),
        ]
    )

    chain = prompt_template | llm 

    ### Statefully manage chat history ###
    store = {}

    def get_session_history(session_id: str) -> BaseChatMessageHistory:
        if session_id not in store:
            store[session_id] = ChatMessageHistory()
        return store[session_id]

    runnable_with_history = RunnableWithMessageHistory(
        chain,
        get_session_history,
        input_messages_key="input",
        history_messages_key="history",
    )
    output = runnable_with_history.invoke({"input": text},
        config={"configurable": {"session_id": "2"}})
    print("Journal Entry : ", text)
    print("Response : ", output) 

    return output