from services.user import checkUserIsExists
import telebot
from telebot import types

bot = telebot.TeleBot('7741059034:AAGSer4mlMLAlzjU5VQfuWP3SWw3DrJF2mQ')

@bot.message_handler(commands=['start'])
def start(message):
    list = checkUserIsExists(message.chat.id)
    print(list)

    markup = types.InlineKeyboardMarkup()
    adminBtn = types.InlineKeyboardButton("Админ панель", url="https://qqrooza.fun/")
    getTextBtn = types.InlineKeyboardButton("Получить случайный текст", callback_data="info")
    getTextListBtn = types.InlineKeyboardButton("Список текстов", callback_data="infoList")
    aboutBotBtn =  types.InlineKeyboardButton("О боте", callback_data="about")
    markup.row(getTextListBtn, getTextBtn)
    markup.row(adminBtn, aboutBotBtn)

    
    bot.send_message(message.chat.id, "Здравствуйте, это телеграм бот для получения случайного текста. Правильно, это очень полезный бот :)", reply_markup=markup)

bot.polling(none_stop=True)
