from services.db import connect_to_db 
def checkUserIsExists(userId):
    conn = connect_to_db()
    cursor = conn.cursor()
    cursor.execute("SELECT tg_id FROM api_tguser WHERE tg_id = %s", (str(userId),))
    res = cursor.fetchall()
    cursor.close()
    conn.close()
    if not res:
        return False
    return True

def addNewUserInDb(userId, userName):
    conn = connect_to_db()
    cursor = conn.cursor()
    cursor.execute("INSERT INTO api_tguser (tg_id, username) VALUES (%s, %s)", (str(userId), userName,))
    conn.commit()
    cursor.close()
    conn.close()
    return True;

def getUserTexts(userId):
    conn = connect_to_db()
    cursor = conn.cursor()
    cursor.execute("SELECT t.text FROM api_usertext u JOIN api_text t ON u.text_id = t.id WHERE u.user_id = %s", (str(userId),))
    res = cursor.fetchall()
    cursor.close()
    conn.close()
    return [text[0] for text in res]

def addTextToUser(textId, userId):
    conn = connect_to_db()
    cursor = conn.cursor()
    cursor.execute("INSERT INTO api_usertext (user_id, text_id, added_at) VALUES (%s, %s, NOW())", (str(userId), str(textId),))
    conn.commit()
    cursor.close()
    conn.close()
    return True;
