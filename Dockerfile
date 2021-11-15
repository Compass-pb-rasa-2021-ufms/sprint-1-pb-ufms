FROM node
COPY . /var/www
WORKDIR /var/www
RUN npm install
ENTRYPOINT npm run server
ENV PORT=3000
EXPOSE $PORT