const http = require("http");


const server = http.createServer((req, res) => {
  res.end("The date and time is :" );
})

server.listen(5000);