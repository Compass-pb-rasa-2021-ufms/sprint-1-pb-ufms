const api = require("./api");
const { name } = require("ci-info");
const express = require ("express");


const server = express();

server.use(express.json());

server.listen(8080);


server.get("/pokemon", async (req, res)  => {
    const { id } =req.params;
try{
    const {data} = await api.get('pokemon/1');
    return res.send({ name: data.name });
}catch(error){
    res.send({error: error.message});
}
})