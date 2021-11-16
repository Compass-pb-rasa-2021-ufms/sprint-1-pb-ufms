const api = require("./api");
const express = require("express");
const server = express();
const cors = require("cors");
server.use(express.static("public"));

server.use(cors());
const port = process.env.PORT || 3000;
server.listen(port),
  function () {
    console.log("Server started.......");
  };

server.get("/:ipe", async (req, res) => {
  const { ipe } = req.params;
  try {
    const { data } = await api.get(`${ipe}`);
    return res.send(data);
  } catch (error) {
    res.send({ error: error.message });
  }
});
