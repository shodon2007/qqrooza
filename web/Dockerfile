FROM node:22.13

ENV PYTHONUNBUFFERED=1

WORKDIR /root/qqrooza-web


COPY . .
RUN npm ci 

CMD ["npm", "run", "build:prod"]
