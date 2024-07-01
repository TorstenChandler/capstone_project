import os
from dotenv import load_dotenv
load_dotenv()

def get_conn_str():
    string = f"""
        dbname={os.getenv('DATABASE_NAME')} 
        user={os.getenv('DATABASE_USER')} 
        password={os.getenv('DATABASE_PASSWORD')} 
        host={os.getenv('DATABASE_HOST')} 
        port={os.getenv('DATABASE_PORT')} 
    """
    return string

def get_conn_str_vector():
    string =  f"postgresql+psycopg://{os.getenv('DATABASE_USER')}:{os.getenv('DATABASE_PASSWORD')}@{os.getenv('DATABASE_HOST')}:{os.getenv('DATABASE_PORT')}/{os.getenv('DATABASE_NAME')}"
    print(string)
    return string

def get_ollama_url():
    return f"http://{os.getenv('OLLAMA_HOST')}:11434"