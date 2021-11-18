## Avaliação Sprint 1 - Programa de Bolsas Compass.uol e UFMS
- Primeira sprint do programa de bolsas Compass.uol para formação em chatbot Rasa.

## Acesso ao app
- [Acesse a página aqui](https://glacial-thicket-96440.herokuapp.com/)
- [API MediaStack](https://mediastack.com/?utm_source=any-api&utm_medium=OwnedSites)


## Acesso
- ### Acesso local 
    - clone o repositório com `git clone`
    - no diretório do projeto clonado, execute `npm install`
    - http://localhost:3000

- ### Acesso local com docker
    - no diretório do projeto clonado execute `npm install`
    - execute `docker build -t compass/node` para criar uma imagem docker localmente
    - execute `docker run -p 8080:3000 compass/node` para subir um container com a imagem criada
    - http://localhost:8080

- ### Acesso a apĺicação
    - Acesse o link [https://glacial-thicket-96440.herokuapp.com/](aqui)

## Utilização
- Na página inicial pesquise por `categoria` ou `palavra-chave`
- Clique em `Leia mais` nos cards gerados para acessar o link da matéria
- Clique em `salvar` para salvar a matéria no `Favoritos`
- Clique em `Favoritos` para acessar os links salvos

