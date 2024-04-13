const url = require("url");
const urlString = "http://localhost:8080/default.htm?year=2017&month=february";
const parsedUrl = new URL(urlString);


console.log(parsedUrl.host);
console.log(parsedUrl.hostname);
console.log(parsedUrl.pathname);
console.log(parsedUrl.port);
console.log(parsedUrl.href);
console.log(parsedUrl.origin);

