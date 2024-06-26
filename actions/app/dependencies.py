import os
from dotenv import load_dotenv
load_dotenv()

def get_conn_str():
    return f"""
        dbname={os.getenv('POSTGRES_DB')} 
        user={os.getenv('POSTGRES_USER')} 
        password={os.getenv('POSTGRES_PASSWORD')} 
        host={os.getenv('POSTGRES_HOST')} 
        port={os.getenv('POSTGRES_PORT')} 
    """

def get_conn_str_vector():
    return f"postgresql+psycopg://{os.getenv('POSTGRES_USER')}:{os.getenv('POSTGRES_PASSWORD')}@{os.getenv('POSTGRES_HOST')}:port={os.getenv('POSTGRES_PORT')}/{os.getenv('POSTGRES_DB')}"
    
def get_ollama_url():
    return f"http://{os.getenv('OLLAMA_HOST')}:11434"