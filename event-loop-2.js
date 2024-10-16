const fs = require("fs");

const a = 100;

setImmediate(() => console.log("setImmediate called"));

Promise.resolve("Promise called").then(console.log);

fs.readFile("./dummyfile.txt", "utf8", () => {
  console.log("File Reading CB");
});

setTimeout(() => {
  console.log("setTimeout Called");
}, 0);

process.nextTick(() => console.log("nextTick Called"));

function printA() {
  console.log("a = ", a);
}
printA();

console.log("Last line of the file");

// =========== OUTPUT ==============

// a = 100
// Last line of the file
// nextTick Called
// Promise called
// setTimeout Called
// setImmediate called
// File Reading CB
