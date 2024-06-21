import os
from dotenv import load_dotenv
load_dotenv()

def get_conn_str():
    dbname="db"
    user="user"
    password="password"
    host="database"
    port=5432
    return f"postgresql://{user}:{password}@{host}:{port}/{dbname}"