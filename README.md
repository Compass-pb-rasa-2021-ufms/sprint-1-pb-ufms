# Avaliação Sprint 1 - Programa de Bolsas Compass.uol e UFMS

## Autor
Leonardo Gabriel Mercurio Lino

## Definição
Esta implementação consome uma API que busca os dados de um CEP.

Ela possui uma página HTML simples, apenas com um campo de texto para o usuário informar o CEP que deseja buscar, um botão de OK para realizar a operação e uma lista a qual serão inseridos os dados da busca.

## Desenvolvimento
Consumindo API no front-end: No index.html, mais especificamente no script, é onde são realizada as funções do front-end.
Utiliza o fetch para buscar os dados da URL informada (neste caso é `https://buscacep-compass.herokuapp.com/`), se comunica
com o back-end para pegar as informações da API, recebe os dados de volta , e transforma em um JSON, 
e chama o devido método para exibir eles para o usuário.

Consumindo API no back-end: No main.js utilizo o axios para buscar os dados na URL da API com o CEP recebido por argumento
(`https://viacep.com.br/ws/CEP/json/`) e retorna eles para o front, escutando a porta informada pelo Heroku ou então pela 
porta padrão 3000.

Dependências da aplicação durante o desenvolvimento:
Express: Facilita o desenvolvimento da API.
Nodemon: Observa a API enquanto são realizadas modificações e reinicia o servidor quando necessário.
Cors: Permite que haja acesso do front-end para a API.
Axios: Realiza a mesma função que o fetch.

## Como utilizar
Podemos utilizar a API de duas maneiras, sendo elas:
1. Acessar o diretório da aplicação via terminal, utilizar o comando npm start e então abrir no navegador o `http://localhost:3000`
2. Acessar o link da aplicação upada no Heroku: `https://buscacep-compass.herokuapp.com`

Ao acessar a página, basta inserir o CEP desejado no campo de texto disponível e clickar no botão Ok que a informação será retornada.