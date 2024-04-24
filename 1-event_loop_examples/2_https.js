const http = require("http");

const createServer = http.createServer((req, res) => {
    console.log("Creating a server");
    res.end("Hello people")
})

createServer.listen(5000, () => {
    console.log("Server created");
})