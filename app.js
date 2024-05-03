const EventEmitter = require("events");

const setEmitter  = new EventEmitter()

setEmitter.on(("recieved"),(data) => {
    console.log("We pushing on", data);
});

setEmitter.emit("recieved", "God.");