FROM python:3
LABEL maintainer="me@shodon.ru"


WORKDIR /usr/src/app

COPY requirements.txt ./
RUN pip install --no-cache-dir -r requirements.txt

COPY . .

ENV DJANGO_SETTINGS_MODULE=qqrooza.settings
ENV PYTHONPATH=/usr/src/app


# CMD ["tail", "-f", "/dev/null"]
CMD python manage.py makemigrations && python manage.py migrate && django-admin runserver 0.0.0.0:8000
