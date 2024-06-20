
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
import psycopg
import ast
import pandas as pd
import os
import psycopg
from fastapi import APIRouter,Request
from fastapi.encoders import jsonable_encoder
from fastapi.responses import JSONResponse
from dotenv import load_dotenv
from ..dependencies import get_conn_str

router = APIRouter()
default_model_name="llama3"

@router.post("/ask")
async def ask(request:Request,question:str):
    body = await request.json()
    user_id = body["session_variables"]["x-hasura-user-id"]
    vectorstore = populate_vector_table(user_id)
    retriever = vectorstore.as_retriever(
        search_type='similarity',#“similarity” (default), “mmr”, or “similarity_score_threshold”.
        search_kwargs={"k": 3, 'filter':{'user_id':user_id}}
        )
    rag_chain = init_rag_chain(retriever)
    response = rag_chain.invoke({"input": question})
    print("\nQuestion : ", input)
    print("Answer : ", response)#["answer"]
    return response["answer"]

def generate_entry_response(text):
    llm = init_ollama("llama3")

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

def populate_vector_table(user_id):
    with psycopg.connect(get_conn_str()) as conn:
        sql = f"SELECT id, user_id, text, date, embedding_text, embedding FROM public.entry where user_id = {user_id}"
        df = pd.read_sql(sql=sql, con=conn)
        df.embedding = df.embedding.map(ast.literal_eval)

        load_dotenv()

        connection = f"postgresql+psycopg://{os.getenv('POSTGRES_USER')}:{os.getenv('POSTGRES_PASSWORD')}@{os.getenv('POSTGRES_HOST')}:{os.getenv('POSTGRES_PORT')}/{os.getenv('POSTGRES_DB')}"
        #connection= "postgresql+psycopg://postgres:password@database:5432/postgres"
        collection_name = "embeddings"
        embeddings = OllamaEmbeddings(model=default_model_name)

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
    return Ollama(model=model_name) 

def init_rag_chain(retriever, model_name=default_model_name):
    #1. initialise LLM model
    llm = init_ollama(model_name)

    # 3. Incorporate the retriever into a question-answering chain.
    system_prompt = (
        "You are an assistant for question-answering tasks. "
        "Use the following pieces of retrieved context to answer the question."
        "But if questions are asked where there is no relevant context available, please answer from what you know. "
        "If you don't know the answer, say that you don't know. "
        " Use three sentences maximum and keep the answer concise."
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



