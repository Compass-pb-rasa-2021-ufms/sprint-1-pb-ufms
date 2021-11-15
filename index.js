const api = require("./api");
const express = require("express");
const server = express();
const cors = require("cors");

server.use(cors());

server.listen(3000);

server.get("/", (req, res) => {
  return res.send({ message: "teste" });
});

server.get("/search/:artist/:song", async (req, res) => {
  const { artist, song } = req.params;
  try {
    const { data } = await api.get(`${artist}/${song}`);
    return res.send(data.lyrics);
  } catch (error) {
    res.send({ error: error.message });
  }
});
