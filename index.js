//Frameworks utilizados na aplicação
const api = require("./api");
const express = require("express");
const server = express();
const cors = require("cors");

//Chamada para o framework express, e cors
server.use(express.static("public"));
server.use(cors());

//Atribuição da porta 3000 para reconhecimento do Heroku
const port = process.env.PORT || 3000;

//Define que o servidor está escutando na porta 3000
server.listen(port),
  function () {
    console.log("Server started.......");
  };

//Server.get recebe o valor do campo input e logo após realiza o envio da informação para o servidor
//a API que retorna um JSON contendo as respectivas informações para o endereço IP.
server.get("/:ipe", async (req, res) => {
  //Recebe o input apartir dos params passados na requisição
  const { ipe } = req.params;
  try {
    //data armazena o JSON de retorno da API
    const { data } = await api.get(`${ipe}`);
    //Retorna para o frontend o JSON de resposta
    return res.send(data);
  } catch (error) {
    res.send({ error: error.message });
  }
});
