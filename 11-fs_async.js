const {readFile, writeFile}  = require("fs");

readFile("./content/first.txt", "utf8", (err, result) => {
    if (err) {
        console.log(err);
        return err;
    }
    const first = result;

readFile("./content/second.txt", "utf8", (err, result) => {
    if (err) {
        console.log(err);
        return err;
    }
     const second = result;

writeFile(
    "./content/result_sync.txt",
    `Here is the result:=> ${first} , ${second}`,
    (err, result) => {
        if (err) {
            console.log(err);
            return err;
        }
        console.log(result);
    });
});
});