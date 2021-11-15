FROM node
COPY . /var/www
WORKDIR /var/www
RUN npm install
ENTRYPOINT npm start
ENV PORT=8080
EXPOSE $PORT

# verificar depois de vale a pena tirar o nodemodules do copy

# docker build . -t <your username>/node-app
# docker run -p 3000:8080 -d <your username>/node-app
# docker exec -it <container id> /bin/bash