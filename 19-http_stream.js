const http = require("http");
const fs = require("fs");


http.createServer((req,res) => {
    const text = fs.readFileSync("./contentt/big.txt");
    res.end(text);
}).listen(5000);