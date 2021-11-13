const express = require('express');
const app = express();

app.get('/', (req, res) => res.send("Wassup"));

app.listen(3000, () =>{
    console.log("Rodando na porta 3000")
});