FROM node:latest

MAINTAINER DanielYudi

COPY  . /var/www

WORKDIR /var/www

RUN npm install

EXPOSE 3000

ENTRYPOINT ['npm','start']