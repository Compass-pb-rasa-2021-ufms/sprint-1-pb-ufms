const cors = require('cors');
const express = require('express');
const app = express();
const axios = require('axios');

const port = process.env.PORT || 3000;

app.use(cors());

app.use(express.static('public'));

app.get('/:cep', async(req, res) => {
    const { cep } = req.params;
    try{
        const { data } = await axios(`https://viacep.com.br/ws/${cep}/json/`);
        return res.json(data);
    } catch (error){
        console.log(error);
    }
});

app.listen(port);
