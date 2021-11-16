# Avaliação Sprint 1 - Programa de Bolsas Compass.uol e UFMS
* [Api escolhida: MediaStack](https://mediastack.com/documentation)
* [clique aqui para acessar a página](https://compass-desafio.herokuapp.com)


## Tecnologias
- NodeJS
- Axios
- Express
- Heroku
- Docker
- Git
- MongoDB

## 
- Foi utilizado o `Express` como servidor para nodejs
- Axios para requisições http para o backend
- Docker para utilizar os containers na aplicação
- MongoDB para salvar os artigos


## Utilização
- Para utilizar localmente basta clonar o repositório com `git clone`
- Executar `npm install` no diretório do projeto.
- Acessar localmente no endereço `http:localhost:3000`.
- Ao acessar a página é possível requisitar artigos jornalísticos por Categoria ou Palavra chave
- No botão `Leia Mais` é possível acessar o link para a matéria
- No botão `Salvar` é possível salvar o link na lista de links
- O botão `Lista` da acesso a lista de links salvos pelo usuário

## Utilização com Docker

- `docker build -f Dockerfile -t compass/node` para construir a imagem
- `docker run -d -p 8080:3000 compass/node` para acessar a imagem
- Acessar localmente em `http://localhost:8080`
- Ou executar o comando `docker-compose build` no diretório do projeto
- Executar `docker-compose up`
