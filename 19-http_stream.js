const http = require("http");
const {createReadStream} = require("fs");

http.createServer((req,res) => {
    const fileStreams = createReadStream("./content/big.txt", "utf8");
    fileStreams.on("open", () => {
        fileStreams.pipe(res);
    });

    fileStreams.on("error",(error) => {
        res.end(error)
    })
    
}).listen(5000);




