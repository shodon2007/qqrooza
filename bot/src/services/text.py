from services.db import connect_to_db


def getRandomText():
    conn = connect_to_db()
    cursor = conn.cursor()
    cursor.execute("SELECT id, text FROM api_text ORDER BY RANDOM() LIMIT 1")
    randomTexts = cursor.fetchall()
    cursor.close()
    conn.close()
    if not randomTexts:
        return False
    return randomTexts[0]
