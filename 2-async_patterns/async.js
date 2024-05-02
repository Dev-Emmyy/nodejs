const {readFile, writeFile} = require("fs").promises;


const Start = async() => {
  try {
    const first = await readFile('./content/first.txt', "utf8");
    const second = await writeFile("./content/last.txt","This should now be the last write-file here","utf8");
    console.log(first);
  }
   catch (error) {
    console.log(error);
  }
}

Start();
