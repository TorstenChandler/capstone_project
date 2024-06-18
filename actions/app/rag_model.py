from langchain.chains import create_retrieval_chain, RetrievalQA
from langchain.chains.combine_documents import create_stuff_documents_chain
from langchain_core.prompts import ChatPromptTemplate
from langchain_community.embeddings import OllamaEmbeddings
from langchain_postgres import PGVector
from langchain_postgres.vectorstores import DistanceStrategy
from langchain_community.llms import Ollama
from main import get_conn_str
import psycopg
import ast
from dotenv import load_dotenv
import pandas as pd
import os

default_model_name="llama3"


def ask_rag(user_id, input):
    vectorstore = populate_vector_table(user_id)
    retriever = vectorstore.as_retriever(
        search_type='similarity',#“similarity” (default), “mmr”, or “similarity_score_threshold”.
        search_kwargs={"k": 3, 'filter':{'user_id':user_id}}
        )
    rag_chain = init_rag_chain(retriever)
    response = rag_chain.invoke({"input": input})
    print("\nQuestion : ", input)
    print("Answer : ", response)#["answer"]
    return response["answer"]

def populate_vector_table(user_id):
    with psycopg.connect(get_conn_str()) as conn:
        sql = f"SELECT id, user_id, text, date, embedding_text, embedding FROM entry where user_id = {user_id}"
        df = pd.read_sql(sql=sql, con=conn)
        df.embedding = df.embedding.map(ast.literal_eval)

        load_dotenv()
        connection = f"postgresql+psycopg://{os.getenv('POSTGRES_USER')}:{os.getenv('POSTGRES_PASSWORD')}@{os.getenv('POSTGRES_HOST')}:{os.getenv('POSTGRES_PORT')}/{os.getenv('POSTGRES_DB')}"
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

