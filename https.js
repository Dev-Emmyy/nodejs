const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Welcome to your first ever owned server.")
  } else if (req.url === "/about") {
    res.end("About to become my second ever owned server.")
  } else {
    res.end(`<h1>Wrong page buddy</h1>
    <p>Please use this link below</p> <a href="/">Home</a>
    `)
  }
})

server.listen(5000);