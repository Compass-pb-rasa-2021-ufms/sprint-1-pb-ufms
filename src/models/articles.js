const mongoose = require('mongoose')

//estabelecendo a conexao
mongoose.connect(process.env.MONGODB_KEY)


mongoose.Promise = global.Promise


//construindo Model
const articlesSchema = new mongoose.Schema({
    author:{
        type:String
    },
    title:{
        type:String
    },
    description: {
        type: String
    },
    url:{
        type:String
    },
    source:{
        type:String
    },
    
    image:{
        type:String
    },
    category:{
        type:String
    },
    language:{
        type:String
    }
})

const Articles = mongoose.model('articles', articlesSchema)

module.exports = Articles