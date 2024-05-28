const http = require("http");
const {readFileSync} = require("fs");

const Homepage = readFileSync("./navbar-app/index.html");
const Homepage_Css = readFileSync("./navbar-app/styles.css");
const Homepage_Logo = readFileSync("./navbar-app/logo.svg");
const Homepage_Logic = readFileSync("./navbar-app/browser-app.js");


const server = http.createServer((req,res) => {
    const url = req.url;
    console.log(url);

    if (url === "/") {
        res.writeHead(200,{"Content-Type" : "text/html"});
        res.write(Homepage);
        res.end();
    }
    else if (url === "/styles.css") {
        res.writeHead(200,{"Content-Type" : "text/css"});
        res.write(Homepage_Css);
        res.end();
    } 
    else if (url === "/browser-app.js") {
        res.writeHead(200,{"Content-Type" : "text/javascript"});
        res.write(Homepage_Logic);
        res.end();
    } 
    else if (url === "/logo.svg") {
        res.writeHead(200,{"Content-Type" : "image/svg+xml"});
        res.write(Homepage_Logo);
        res.end();
    } 
    else {
        res.writeHead(404,{"Content-Type" : "text/html"});
        res.write("<h1>Page not found</h1>");
        res.end();
    }
});

server.listen(5000);
