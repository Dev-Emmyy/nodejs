const path = require("path");

const filePath = path.join("/content", "subfolder", "test.txt");
console.log(filePath);

const base = path.basename(filePath);
console.log(base);

const absolute = path.resolve(__dirname, "content", "subfolder", "test.txt");
console.log(absolute);

const absolute2 = path.resolve(__filename, "content", "subfolder");
console.log(absolute2);