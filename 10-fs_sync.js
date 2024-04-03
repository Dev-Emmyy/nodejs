const {readFileSync, writeFileSync}  = require("fs");

const first = readFileSync("./content/first.txt", "utf8");
const second = readFileSync("./content/second.txt", "utf8");
console.log(first);
console.log(second);

const third = writeFileSync("./content/third.txt", "Hello this is the third text file.");
const fourth = writeFileSync("./content/fourth.txt", "Hello this is the fourth text file.");
console.log(third);
console.log(fourth);