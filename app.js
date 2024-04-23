const {readFile} = require("fs");

console.log("Complete");

readFile("./content/second.txt", "utf8", (err, result) => {
    if (err) {
        console.log(err);
        return
    }
    console.log(result);
    console.log("Completed Task");
});

console.log("Starting Next Task");








