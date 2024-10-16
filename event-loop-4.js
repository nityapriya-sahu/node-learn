const fs = require("fs");

setImmediate(() => console.log("setImmediate called"));

setTimeout(() => {
  console.log("setTimeout Called");
}, 0);

Promise.resolve("Promise Called").then(console.log);

fs.readFile("./dummyfile.txt", "utf8", () => {
  console.log("file Reading CB");
});

process.nextTick(() => {
  process.nextTick(() => console.log("Inner nextTick"));

  console.log("process.nextTick");
});

console.log("Last line of the File");

// =========== OUTPUT ==============

// Last line of the File
// process.nextTick
// Inner nextTick
// Promise Called
// setTimeout Called
// setImmediate called
// file Reading CB

//------------------------------Explanation--------------------------------

//Note:-
/*
When the event loop is empty and there are no more tasks to execute, it enters the 
poll phase and essentially waits for incoming events
*/
