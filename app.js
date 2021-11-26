//Usando Axios para fazer a comunicação com a API
const axios = require("axios");
const api = axios.create({
  baseURL: "https://api.lyrics.ovh/v1/",
});

//Usando Express como servidor
const express = require("express");
const server = express();
server.use(express.static("public")); //Definindo a pasta public para elementos frontend

//Requisitando o CORS no servidor
const cors = require("cors");
server.use(cors());

const port = process.env.PORT || 3000;
server.listen(port),
  function () {
    console.log("Server started.......");
  };

//Fazendo a conexão com a API pelo método GET
server.get("/:artist/:song", async (req, res) => {
  const { artist, song } = req.params;
  try {
    const { data } = await api.get(`${artist}/${song}`);
    return res.send(data.lyrics);
  } catch (error) {
    res.send({ error: error.message });
  }
});
