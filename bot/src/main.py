from services.text import getRandomText
from services.user import addTextToUser, addNewUserInDb, checkUserIsExists, getUserTexts
import telebot
from telebot import types

bot = telebot.TeleBot('7741059034:AAGSer4mlMLAlzjU5VQfuWP3SWw3DrJF2mQ')

def about_page(msg):
    bot.send_message(msg.chat.id, "Бот создал создатель бота. github: https://github.com/shodon2007")

def info_page(msg):
    randomText = getRandomText()
    if not randomText:
        bot.send_message(msg.chat.id, "К сожелению у нас нет ни одного текста чтобы вам дать. Попросите админов добавить текст")
        return
        
    addTextToUser(randomText[0], msg.chat.id)
    bot.send_message(msg.chat.id, "Вы получили текст " + randomText[1])

def texts_page(msg):
    userTextList = getUserTexts(msg.chat.id);
    response = "Список текстов:\n" + "\n".join(userTextList)

    bot.send_message(msg.chat.id, response)

@bot.message_handler(commands=['start'])
def start(message):
    isUserExists = checkUserIsExists(message.chat.id)
    if not isUserExists:
        addNewUserInDb(message.chat.id, message.from_user.username)

    markup = types.InlineKeyboardMarkup()
    adminBtn = types.InlineKeyboardButton("Админ панель", url="https://qqrooza.fun/")
    getTextBtn = types.InlineKeyboardButton("Получить случайный текст", callback_data="info")
    getTextListBtn = types.InlineKeyboardButton("Список текстов", callback_data="infoList")
    aboutBotBtn =  types.InlineKeyboardButton("О боте", callback_data="about")
    markup.row(getTextListBtn, getTextBtn)
    markup.row(adminBtn, aboutBotBtn)
    
    bot.send_message(message.chat.id, "Здравствуйте, это телеграм бот для получения случайного текста. Правильно, это очень полезный бот :)", reply_markup=markup)

@bot.callback_query_handler(func=lambda callback: True)
def callback_message(callback):
    if (callback.data == "about"):
        about_page(callback.message)
    
    if (callback.data == "info"):
        info_page(callback.message)

    if (callback.data == "infoList"):
        texts_page(callback.message)

@bot.message_handler(commands=["about"]) 
def about(message):
    about_page(message)

bot.polling(none_stop=True)
