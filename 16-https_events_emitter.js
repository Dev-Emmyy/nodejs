const http = require("http");

const createSever = http.createServer(() => {
   createSever.on("request",(req,res) => {
    res.end("Hello")
   })
});

createSever.listen(5000);