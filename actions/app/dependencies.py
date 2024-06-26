import os
from dotenv import load_dotenv
load_dotenv()

def get_conn_str():
    return f"""
        dbname=db
        user=user
        password=password
        host=localhost
        port=5432
    """
