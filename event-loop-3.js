const fs = require("fs");

const a = 200;

setImmediate(() => console.log("setImmediate called"));

setTimeout(() => {
  console.log("setTimeout Called");
}, 0);

Promise.resolve("Promise Called").then(console.log);

fs.readFile("./dummyfile.txt", "utf8", () => {
  setTimeout(() => {
    console.log("2nd Timer");
  }, 0);

  process.nextTick(() => console.log("2nd NextTick"));

  setImmediate(() => console.log("2nd setImmediate"));

  console.log("file Reading CB");
});

process.nextTick(() => console.log("1st NextTick"));

console.log("Last line of the file");

// =========== OUTPUT ==============

// Last line of the file
// 1st NextTick
// Promise Called
// setTimeout Called
// setImmediate called
// file Reading CB
// 2nd NextTick
// 2nd setImmediate
// 2nd Timer
