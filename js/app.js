const cors = require('cors');
const express = require('express');
const app = express();
const aiox = require('axios');
const { default: axios } = require('axios');

app.use(cors());

app.listen("8080");

app.get("/", async(req, res) => {
    try{
        const {data} = await axios('http://api.ipapi.com/api/161.185.160.93?access_key=dd9c3b1a6c810b6c9ddb77c1d92a71d8');
        console.log(req);
        return res.json(data);
    }catch(error){
        console.error(error);
    }
});