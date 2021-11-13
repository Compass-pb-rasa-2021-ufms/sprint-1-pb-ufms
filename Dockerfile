FROM node:latest
RUN mkdir /app
ADD . ./app
WORKDIR /app
CMD node app.js --bind 0.0.0.0:$PORT