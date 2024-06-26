
from ..dependencies import get_conn_str
from fastapi import APIRouter,Request, BackgroundTasks
from fastapi.encoders import jsonable_encoder
from fastapi.responses import JSONResponse
from pydantic import BaseModel, Field
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
import psycopg
from threading import Thread

class Entry(BaseModel):
    id: str
    user_id: str
    text: str
    date: str

class SaveEventInput(BaseModel):
    text: str
    date: str

class SessionVariables(BaseModel):
    x_hasura_user_id: str =Field(alias = "x-hasura-user-id")

class Payload(BaseModel):
    input: SaveEventInput
    session_variables: SessionVariables


def process(entry):
    emotions = classify_emotions(entry)
    #topics = classify_topics(entry)
    topics = []
    embedding(entry, emotions,topics)
   

router = APIRouter()
@router.post("/entry_inserted")
async def entry_inserted(request:Request, entry:Entry):
    Thread(target=process, args=(entry,)).start()
    return JSONResponse(jsonable_encoder({"received": True}))

@router.post("/save_entry")
async def save_entry(payload:Payload):
    text = payload.input.text
    date = payload.input.date
    user_id = int(payload.session_variables.x_hasura_user_id)


    response = generate_entry_response(text)
    with psycopg.connect(get_conn_str()) as conn:
        with conn.cursor() as cursor:
            insert_query = f'''
            INSERT INTO entry (user_id, text, date ) VALUES (%s,%s,%s)
            '''
            cursor.execute(insert_query, (user_id, text, date))
            conn.commit()
            conn.close()
    return JSONResponse(jsonable_encoder({"response": response}))

def classify_emotions(entry):
    with psycopg.connect(get_conn_str()) as conn:
        with conn.cursor() as cursor:
            classifier = pipeline(model="Dimi-G/roberta-base-emotion", top_k=None)
            emotions = classifier(entry.text)[0]

            #function to sort the order of the dictionary output
            #def order_labels(emotions):
            #    labels_order = ['anger', 'fear', 'joy', 'love', 'sadness', 'surprise']
            #    order_dict = {label: index for index, label in enumerate(labels_order)}
            #    # Sort based on the desired order
            #    ordered_output = sorted(emotions[0], key=lambda x: order_dict[x['label'].lower()]) 
            #    return ordered_output 
            #
            #ordered_emotions = order_labels(emotions)

            emotionValues = []
            emotionLabels = []
            for emotion in emotions:
                emotionLabels.append(emotion["label"])
                emotionValues.append(emotion["score"])
            emotionLabels = ','.join(emotionLabels)
            insert_query = f'''
            INSERT INTO emotion (id, {emotionLabels}) VALUES (%s , %s, %s, %s, %s, %s, %s)
            '''
            cursor.execute(insert_query, tuple([entry.id] + emotionValues))
            conn.commit()
            conn.close()
            return emotions
        
def classify_topics(entry):
    with psycopg.connect(get_conn_str()) as conn:
        with conn.cursor() as cursor:
            classifier = pipeline("zero-shot-classification", model="eleldar/theme-classification")
            topics = classifier(entry.text, ['friends', 'relation', 'work', "hobby", "goals"])
            topics = classifier(entry.text, ['friends', 'goals', 'hobby', 'relation', 'work'])
            labels = ",".join(topics["labels"])
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

            insert_query = f'''
            INSERT INTO topic (id, {labels}) VALUES (%s,%s,%s,%s,%s,%s)
            '''
            cursor.execute(insert_query, tuple([entry.id]) + tuple(topics["scores"]))
            conn.commit()
            conn.close()
            return topics

def embedding(entry, emotions, topics):
    with psycopg.connect(get_conn_str()) as conn:
        with conn.cursor() as cursor:
            relevant_emotions =  [emotion for emotion in emotions if emotion['score'] > 0.5]
            emotion_labels = [emotion["label"] for emotion in relevant_emotions]
            embedding_text = f"date: {entry.date}; emotions:{emotion_labels}; topics:{topics}; text:{entry.text}"
            engine = OllamaEmbeddings(model='llama3', base_url="http://localhost:11434")
            embedding = engine.embed_query(embedding_text)
            insert_query = "UPDATE entry set embedding_text = %s, embedding = %s where id = %s"
            cursor.execute(insert_query, (embedding_text, embedding, entry.id))
            conn.commit()
            conn.close()
    

def generate_entry_response(text):
    llm = Ollama(model="llama3",  base_url="http://localhost:11434", verbose=False)

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