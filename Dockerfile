FROM node:8.17.0

RUN mkdir -p /src/app

WORKDIR /src/app

COPY . /src/app

FROM ubuntu:latest

RUN apt-get update && apt-get install -y vim

RUN npm install

EXPOSE 4000

CMD [ "npm", "run", "build:react"]