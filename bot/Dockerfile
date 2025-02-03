FROM python:3
LABEL maintainer="me@shodon.ru"


WORKDIR /usr/src/app

COPY requirements.txt ./
RUN pip install --no-cache-dir -r requirements.txt

COPY . .

ENV PYTHONPATH=/usr/src/app


CMD ["tail", "-f", "/dev/null"]
# CMD ["python", "./src/main.py"]
