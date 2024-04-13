const http = require("http");
const dateTime = require("./testmodul");

const server = http.createServer((req, res) => {
  res.end("The date and time is :" + dateTime.myDateTime());
})

server.listen(5000);