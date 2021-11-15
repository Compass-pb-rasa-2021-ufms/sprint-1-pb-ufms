const http = require('http');
const fs = require('fs');

fs.readFile('./index.html', function(error,data) {
  if(error)
  throw error;
  htmlFile = data;
})

app.listen("3000");
app.get("/", async(res) => {
  res.writeHead(200,{'Content-Type': 'text/html'});
  res.write(htmlFile);
});
