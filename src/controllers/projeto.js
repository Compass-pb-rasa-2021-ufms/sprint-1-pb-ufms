
const express = require('express')
const path = require('path');
const axios = require('axios')
const Articles = require('../models/articles')


const router = express.Router()

// rota para página inicial
router.get('/', async (req, res) => {
    res.sendFile(path.join(__dirname+'../../../public/index.html'));
})


// rota para página de favoritos
router.get('/lista', async (req, res) => {
    res.sendFile(path.join(__dirname+'../../../public/lista.html'));
})


//extraindo dados gerais
router.get('/noticias', async (req, res) => {
    try {
     
        //extraindo os dados da api
        const { data:{data} } = await axios('http://api.mediastack.com/v1/news?access_key='+process.env.API_KEY+'&languages=pt')
        console.log(data)
        res.json(data)
    } catch (error) {
        console.log(error)
    }
})


//extraindo dados por categoria
router.post('/categoria', async (req, res) =>{
    try {
        const {categoria} = req.body
      
        const { data:{data} } = await axios(`http://api.mediastack.com/v1/news?access_key=`+process.env.API_KEY+`&languages=pt&categories=${categoria}`)
        //extraindo os dados da api
        res.json(data)

    } catch (error) {
        console.log(error)
    }
    
})


//extraindo dados por palavra chave
router.post('/keyword', async (req, res) =>{
    try {
        const {keyword} = req.body
    
        const { data:{data} } = await axios(`http://api.mediastack.com/v1/news?access_key=`+process.env.API_KEY+`&languages=pt&keywords=${keyword}`)
        //extraindo os dados da api
        res.json(data)
    } catch (error) {
        console.log(error)
    }
    
})


// rota para salvar dados
router.post('/save', async (req, res) =>{
    try {
        const {author, title, description, url, source,image, category,language} = req.body
        const response = await Articles.create({
            author,
            title,
            description,
            url,
            source,
            image,
            category,
            language
        })
        //extraindo os dados da api
        res.json(response)

    } catch (error) {
        console.log(error)
    }
    
})


//rota para requisitar dados salvos
router.post('/saved', async (req, res) =>{
    try {
        const response = await Articles.find()
        //extraindo os dados da api
        res.json(response)  

    } catch (error) {
        console.log(error)
    }
    
})


//rota para deletar todos os dados salvos
router.get('/delete', async (req, res) =>{
    try {
        const response = await Articles.deleteMany()
        //extraindo os dados da api
        res.json(response)  

    } catch (error) {
        console.log(error)
    }
    
})

module.exports = app => app.use('/', router)