//filesystem
const http = require('http');
const fs = require('fs');
const PORT = 3000;
//vou pro html
const server = http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'text/html'})
    fs.readFile('index.html', function(error, data) {
        if(error){
            res.writeHead(404);
            res.write('Errei, sem arquivo');
        }else{
            res.write(data);
        }
        res.end();
    })
});
server.listen(PORT,function(error) {
    if(error)
        console.log('algo deu errado', error);
    else
        console.log('porta: ',PORT);
});
