const {readFile, writeFile} = require("fs").promises;
// const util = require("util");
// const readFilePromises = util.promisify(readFile);
// const writeFilePromises = util.promisify(writeFile);



const start = async() => {
    try {
      const first = await readFile("./content/first.txt", "utf8");
      const second = await readFile("./content/second.txt", "utf8");
      await writeFile("./content/last.txt", "This should now be the last write-file here", "utf8")
      console.log(first, second);
    } catch (error) {
        console.log(error);
    }
};

start();






// const getText = (path) => {
//     return new Promise((resolve, reject) => {
//         readFile(path, "utf8", (err,data) => {
//             if (err) {
//                 reject(err);
//             } else {
//                 resolve(data);
//             }
//         });
//     })
// }





