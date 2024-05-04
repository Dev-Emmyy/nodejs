const Eventemitter = require("events");

const createSEmitter = new Eventemitter();

createSEmitter.on("recieved", (data) => {
    console.log(`Just sent ${data}`);
});

createSEmitter.emit("recieved", "the letter.");