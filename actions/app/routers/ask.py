
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
    try :
        user_id = int(payload.session_variables.x_hasura_user_id)
        question = payload.input.question
        user_entries = get_user_entries(user_id, question)
        if user_entries is not None and len(user_entries) > 0:
            vectorstore = populate_vector_table(user_entries)
            #vectorstore.similarity_search_with_score("At which music shows did I perform", k=3, filter={"user_id": {"$in": [21]}})
            retriever = vectorstore.as_retriever(
                search_type='similarity',#“similarity” (default), “mmr”, or “similarity_score_threshold”.
                search_kwargs={"k": 3, 'filter':{'user_id':user_id}}
                )
            
            rag_chain = init_rag_chain(retriever)
            response = rag_chain.invoke({"input": question})["answer"]
            print("\nQuestion : ", input)
            print("Answer : ", response)#["answer"]
        else:
            response = "We're sorry. We were unable to find any records related to your query."
    except Exception as e:
        response = "We're sorry. Something went wrong while trying to answer your question."
    return JSONResponse(jsonable_encoder({"answer":response}))

def get_user_entries(user_id, question):
    with psycopg.connect(get_conn_str()) as conn:
        sql = f"SELECT id, user_id, text, date, embedding_text, embedding FROM public.entry where user_id = {user_id}"
        if contains_date(question):
            dates = extract_date_from_question(question)
            if len(dates) == 2 : 
                sql = f"SELECT id, user_id, text, date, embedding_text, embedding FROM public.entry where user_id = {user_id} and date BETWEEN '{dates[0]}' and '{dates[1]}'"
        
        df = pd.read_sql(sql=sql, con=conn)
        df.embedding = df.embedding.map(ast.literal_eval)
        conn.close()
        print(f"Found {len(df)} data for user")
        return df

def populate_vector_table(user_entries):
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
        ids=user_entries.id.values.tolist(),
        metadatas=user_entries[["user_id"]].to_dict("records"),
        texts=user_entries.embedding_text.values.tolist(),
        embeddings=user_entries.embedding.values.tolist(),   
    )
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
    print("Checking if question contains date")
    
    # Regular expression to match a four-digit year (e.g., 2020)
    year_pattern = r'\b(19|20)\d{2}\b'
    
    # Regular expression to match month names (full names)
    month_pattern = (
        r'\b(January|February|March|April|May|June|'
        r'July|August|September|October|November|December)\b'
    )
    
    # Regular expression to match relative time references
    relative_pattern = (
        r'\b(Today|Tomorrow|Yesterday|Last|Next|Previous|This|'
        r'Month|Year|Week|Day|Hour|Minute|Second|'
        r'Season|Spring|Summer|Autumn|Fall|Winter)\b'
    )
    
    # Check if the text contains a year, a month name, or a relative time reference
    if re.search(year_pattern, text, re.IGNORECASE) or re.search(month_pattern, text, re.IGNORECASE) or re.search(relative_pattern, text, re.IGNORECASE):
        print("A date was found in the user query")
        return True
    else:
        print("No date was found in the user query")
        return False


def extract_date_from_question(question):
    dates = []
    try : 
        llm = init_ollama()
        prompt_template = PromptTemplate.from_template("""
        You are an intelligent assistant. From the user input, identify and extract the date range suitable for an SQL query and
        return it in your output in a json structured format that includes the start and end dates in the format YYYY-mm-dd.
        Output format : {{"start": "YYYY-mm-dd", "end": "YYYY-mm-dd"}}.
        Ensure to cover various time frames such as specific days, months, years, or combinations thereof.
        Answer only with the output json, skip other details. If you do not know the answer, return the dates as 0000-00-00. 
        User input: {question} """)


        chain = prompt_template | llm
        output = chain.invoke({"question": question})
        print("Result", output)
        start_index = output.find('{"start":')
        end_index = output.find('"}', start_index) + 2
         # Extract the JSON string
        if start_index != -1 and end_index != -1:
            json_string = output[start_index:end_index]
            print(start_index, end_index, json_string)
            # Parse the JSON string into a Python dictionary
            parsed_data = json.loads(json_string)
            # Access the values
            start_date = parsed_data.get("start", "0000-00-00")
            end_date = parsed_data.get("end", "0000-00-00")
            # Print the values
            print("Start Date:", start_date)
            print("End Date:", end_date)
            if validate_dates:
                dates.append(start_date)
                dates.append(end_date)
    except Exception as e:
        print("Error occured in extracting dates: {e}. Not filtering by date")
    return dates


def validate_dates(dates_list):
    # Check if dates_list is not None and has exactly 2 elements
    if dates_list is None or len(dates_list) != 2:
        print("Received invalid dates from Ollama")
        return False
    
    # Check if both dates are not None and are instances of datetime.date or datetime.datetime
    for date in dates_list:
        if date is None or not isinstance(date, (datetime, datetime.date)) or date == "0000-00-00" or not re.match(r'\d{4}-\d{2}-\d{2}', date):
            print("Received invalid dates from Ollama")
            return False
    
    print("Ollama returned successful dates")
    return True