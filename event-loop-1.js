const fs = require("fs");

const a = 200;

setImmediate(() => console.log("setImmediate Called"));

fs.readFile("./dummyfile.txt", "utf8", (err, data) => {
  // console.log("data = ", data);

  console.log("file reading CB");
});

setTimeout(() => {
  console.log("Timer called");
}, 0);

function printA() {
  console.log("a = ", a);
}
printA();

console.log("Last line of the file");

// =========== OUTPUT ==============

// a =  200
// Last line of the file
// Timer called
// setImmediate Called
// file reading CB
