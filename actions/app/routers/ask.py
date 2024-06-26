
from langchain.chains import create_retrieval_chain, RetrievalQA
from langchain.chains.combine_documents import create_stuff_documents_chain
from langchain_core.prompts import ChatPromptTemplate
from langchain_community.embeddings import OllamaEmbeddings
from langchain_postgres import PGVector
from langchain_postgres.vectorstores import DistanceStrategy
from langchain_community.llms import Ollama
from langchain_core.runnables.history import RunnableWithMessageHistory
from langchain_core.chat_history import BaseChatMessageHistory
from langchain_community.chat_message_histories import ChatMessageHistory
from langchain_core.prompts import PromptTemplate
from datetime import datetime
import psycopg
import ast
import pandas as pd
import os
import psycopg
from fastapi import APIRouter,Request
from fastapi.encoders import jsonable_encoder
from fastapi.responses import JSONResponse
from dotenv import load_dotenv
from ..dependencies import get_conn_str, get_conn_str_vector, get_ollama_url
from fastapi.encoders import jsonable_encoder
from fastapi.responses import JSONResponse
import re
import json
from pydantic import BaseModel, Field

router = APIRouter()
default_model_name="llama3"

class QuestionInput(BaseModel):
    question:str

class SessionVariables(BaseModel):
    x_hasura_user_id: str=Field(alias="x-hasura-user-id")

class QuestionPayload(BaseModel):
    input: QuestionInput
    session_variables: SessionVariables



@router.post("/ask")
async def ask(payload:QuestionPayload):
    print("Payload ", payload)
    user_id = int(payload["session_variables"]["x_hasura_user_id"])
    question = payload["input"]["question"]
    
    vectorstore = populate_vector_table(user_id, question)
    #vectorstore.similarity_search_with_score("At which music shows did I perform", k=3, filter={"user_id": {"$in": [21]}})
    retriever = vectorstore.as_retriever(
        search_type='similarity',#“similarity” (default), “mmr”, or “similarity_score_threshold”.
        search_kwargs={"k": 3, 'filter':{'user_id':user_id}}
        )
    
    
    rag_chain = init_rag_chain(retriever)
    response = rag_chain.invoke({"input": question})
    print("\nQuestion : ", input)
    print("Answer : ", response)#["answer"]
    return JSONResponse(jsonable_encoder({"answer":response["answer"]}))


def populate_vector_table(user_id, question):
    with psycopg.connect(get_conn_str()) as conn:
        sql = f"SELECT id, user_id, text, date, embedding_text, embedding FROM public.entry where user_id = {user_id}"
        if contains_date(question):
            start_date, end_date = extract_date_from_question(question)
            sql = f"SELECT id, user_id, text, date, embedding_text, embedding FROM public.entry where user_id = {user_id} and date BETWEEN '{start_date}' and '{end_date}'"
        
        df = pd.read_sql(sql=sql, con=conn)
        df.embedding = df.embedding.map(ast.literal_eval)
        print(df)
        load_dotenv()

        connection= get_conn_str_vector()
        collection_name = "embeddings"
        embeddings = OllamaEmbeddings(model=default_model_name, base_url=get_ollama_url())

        vectorstore = PGVector(
            collection_name="embeddings",
            connection=connection,
            embeddings=embeddings,
            pre_delete_collection=True,
            distance_strategy='cosine'
        )
        
        vectorstore.add_embeddings(
            ids=df.id.values.tolist(),
            metadatas=df[["user_id"]].to_dict("records"),
            texts=df.embedding_text.values.tolist(),
            embeddings=df.embedding.values.tolist(),   
        )
        conn.close()
        return vectorstore
    
def init_ollama(model_name=default_model_name):
    return Ollama(model=model_name, base_url=get_ollama_url()) 

def init_rag_chain(retriever, model_name=default_model_name):
    #1. initialise LLM model
    llm = init_ollama(model_name)

    # 3. Incorporate the retriever into a question-answering chain.
    system_prompt = (
        "You are an assistant helping users to interact with their diary "
        "Use the following information retrieved from the diary entries to answer the question."
        "If you can't give an answer based on the provided information, let the user know."
        "Use three to five sentences maximum and keep the answer concise."
        f"today is {datetime.today().strftime('%Y-%m-%d')}"
        "\n\n"
        "{context}"
    )

    prompt = ChatPromptTemplate.from_messages(
        [
            ("system", system_prompt),
            ("human", "{input}"),
        ]
    )
    #MapReduceDocumentsChain
    question_answer_chain = create_stuff_documents_chain(llm, prompt)
    rag_chain = create_retrieval_chain(retriever, question_answer_chain)
    return rag_chain



def generate_entry_response(text):
    llm = init_ollama()

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

def contains_date(text):
    # Regular expression to match a four-digit year (e.g., 2020)
    year_pattern = r'\b(19|20)\d{2}\b'
    # Regular expression to match month names (full names)
    month_pattern = (
        r'\b(January|February|March|April|May|June|'
        r'July|August|September|October|November|December)\b'
    )
    relative_pattern = (
        r'\b(Today|Tomorrow|Yesterday|Month|Year|Week)\b'
    )
    # Check if the text contains a year or a month name
    if re.search(year_pattern, text) or re.search(month_pattern, text) or re.search(relative_pattern, text):
        return True
    else:
        return False

def extract_date_from_question(question):
    llm = init_ollama()
    prompt_template = PromptTemplate.from_template("""
    You are an intelligent assistant. From the user input, identify and extract the date range suitable for an SQL query and
    return it in your output in a json structured format that includes the start and end dates in the format YYYY-mm-dd.
    Output format : {{"start": "YYYY-mm-dd", "end": "YYYY-mm-dd"}}.
    Ensure to cover various time frames such as specific days, months, years, or combinations thereof.
    Answer only with the output json, skip other details. If you do not know the answer, return the dates as 0000-00-00 """)
    chain = prompt_template | llm
    output = chain.invoke({"date": "Why was I sad in March 2024?"})
    print("Result", output)
    start_index = output.find('{"start":')
    end_index = output.find('"}', start_index) + 2
    json_string = output[start_index:end_index]
    print(start_index, end_index, json_string)
    # Parse the JSON string into a Python dictionary
    parsed_data = json.loads(json_string)
    # Access the values
    start_date = parsed_data["start"]
    end_date = parsed_data["end"]
    # Print the values
    print("Start Date:", start_date)
    print("End Date:", end_date)
    return start_date, end_date