//filesystem
const http = require('http');
const fs = require('fs');

const port = process.env.PORT || 3000;

fs.readFile('./index.html', function(error,data) {
    if(error)
        throw error;
    htmlFile = data;
})
fs.readFile('./style.css', function(error,data) {
    if(error)
        throw error;
    cssFile = data;
})
fs.readFile('./script.js', function(error,data) {
    if(error)
        throw error;
    jsFile = data;
})
// problema: eu tava mandando um request e fechando ele, por isso não tava pegando a referencia lá no html
// garantir que eu mande os requests
var server = http.createServer(function (req,res){
    switch(req.url){
        case '/style.css' :
            res.writeHead(200, {'Content-Type':'text/css'});
            res.write(cssFile);
            break;
        case '/script.js':
            res.writeHead(200,{'Content-Type':'text/javascript'});
            res.write(jsFile);
            break;
        default :
            res.writeHead(200,{'Content-Type': 'text/html'});
            res.write(htmlFile);
    }
    res.end();
})        

server.listen(port,function(error) {
    if(error)
        console.log('Algo deu errado', error);
    else
        console.log('To funcionando! acesso localhost:3000! Com docker deve ser outra porta!');
});