тестовое задание.
Чтобы посмотреть на него напишите в https://t.me/qqroozaBot
Админ панель: qqrooza.fun (логин root пароль root);
Ссылка на макет: https://www.figma.com/design/1IKkfJIHQaONb6GhItT3H4/qqrooza?node-id=3-13&t=kOHj1iVkYEbZFq99-1 (не доделано ссори) (там первая страница emptyPage, если слева сверху тыкнуть там другие страницы откроются и там есть макеты)

технологии: docker, python-django, pyTelegrambotapi, postgresql, react, effector

Как развернуть?
Чтобы развернуть этот проект на локалке необходимо:
1. скачать docker, docker-compose
2. в botFather создать другого бота (если этого запустить то он будет конфликтовать с моим на серваке)
и его токен поставить в /bot/src/main.py (6 строка).

Чтобы запустить надо скопировать этот проект к себе (git clone https://github.com/shodon2007/qqrooza) и написать sudo docker compose build && sudo docker compose up -d (PS если у вас нет sudo (аля виндовсеры) или у вас не docker compose а docker-compose крч думайте сами как docker-compose написать)
ну и все. переходим в localhost:3400 чтобы увидеть админку. а в localhost:4000 чтобы потыкать апишку.
кста вам еще чтобы потыкать админку надо создать админа:
  для этого вам надо где нибудь в postman написать post запрос в http://localhost:4000/api/user/register и в body передать username и password и потом с этими username, password зайти в админку.

 Прикиньте я домен купил для этого тз :)
