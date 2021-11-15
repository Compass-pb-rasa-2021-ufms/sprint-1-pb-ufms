# Avaliação Sprint 1 - Programa de Bolsas Compass.uol e UFMS
Primeira sprint do programa de bolsas Compass.uol para formação em chatbot Rasa.

### :green_circle: Acesso ao App
    https://vast-sierra-94207.herokuapp.com/
    
### :gear: Configuração e inicalização local

:warning: Clone o projeto antes de cada passo!

- Rodando o projeto para desenvolvimento
```sh

$ install npm
$ npm run dev

Acesso em localhost:3000

```
- Usando o docker
```sh

onde existir aspas simples, pode ser qualquer nome/numero definido pelo usuário

$ docker build -t 'nome-da-img' . 
$ docker run -it -p 'porta':3000 'nome-da-img'

Acesso em localhost:'porta'
```

- Subindo para o heroku

```sh

$ heroku login
$ heroku container:login
$ heroku create  (Esse comando cria um app no site com um nome aleatório, no terminal aparece algo assim: ⬢ vast-sierra-94207)
$ docker build -t registry.heroku.com/'nome-do-app-criado'/web .
$ docker push registry.heroku.com/'nome-do-app-criado'/web
$ heroku container:release web -a 'nome-do-app-criado'
$ heroku open -a 'nome-do-app-criado'
```
### :books: Documentações das tecnologias e dependências
- [Nodejs](https://nodejs.org/en/docs/)
- [Docker](https://docs.docker.com/)
- [Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli)
- [cross-fetch](https://www.npmjs.com/package/cross-fetch)
- [nodemon](https://www.npmjs.com/package/nodemon)
- [http](https://nodejs.org/api/http.html#http)
- [fs](https://nodejs.org/api/fs.html#file-system)


### :game_die: API
- [ygoprodeck](https://db.ygoprodeck.com/api-guide/)

### :book: Trello 
- [Trello](https://trello.com/b/00J86fSA/pb-rasa-2021-sprint-1)
