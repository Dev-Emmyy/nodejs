const {readFile} = require("fs");

console.log("Complete task");

readFile("./content/first.txt", "utf8", (err,result) => {
    if (err) {
        console.log(err);
        return
    }
    console.log(result);
    console.log("Completed the task");
});

console.log("Statement completed");
