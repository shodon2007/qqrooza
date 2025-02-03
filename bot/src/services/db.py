import psycopg2

DB_URL = "postgres://root:root@db:5432/qqrooza"

def connect_to_db():
    conn = psycopg2.connect(DB_URL)
    return conn
