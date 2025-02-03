from services.db import connect_to_db 
def checkUserIsExists(userId):
    conn = connect_to_db()
    cursor = conn.cursor()
    cursor.execute("""SELECT * FROM information_schema.tables
    WHERE table_schema = 'public'""")
    res = cursor.fetchall()
    cursor.close()
    conn.close()
    return res;
