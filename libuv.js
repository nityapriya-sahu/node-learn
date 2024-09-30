// Node js work behind the scenes through below code

const https = require("https");
const fs = require("fs");

console.log("Hello World");

var a = 100;
var b = 200;

//Synchronous
fs.readFileSync("./dummyfile.txt", "utf-8"); //10ms
console.log("This will execute only after file read.");

https.get("https://dummyjson.com/products/1", (res) => {
  console.log("fetched data sucessfully");
});

setTimeout(() => {
  console.log("settimeout after 5 second");
}, 5000);

//Async Function
fs.readFile("./dummyfile.txt", "utf8", (err, data) => {
  console.log("log file data: ", data);
});

function multiply(a, b) {
  let resMultiply = a * b;
  return resMultiply;
}

var c = multiply(a, b);
console.log("Result is : ", c);

//=================================================================

// The JS engine cannot directly access OS files, so it calls on Libuv. Libuv, being
// very cool and full of superpowers, communicates with the OS, performs all the
// necessary tasks, and then returns the response to the JS engine. He offloads the
// work and does wonders behind the scene.
//..................

// The variables
// let a and
// let b are executed within the GEC Global Execution
// Context) during the synchronous phase of the code execution process.
// ......
//  However, when the code encounters an API call, the V8 engine, while still
// operating within the GEC, recognizes that it's dealing with an asynchronous
// operation. At this point, the V8 engine signals libuv —the superhero of Node.js
// —to handle this API call.

//...............................

// What happens next is that
// libuv registers this API call, including its associated
// callback function (name  A, within its event loop, allowing the V8 engine to
// continue executing the rest of the code without waiting for the API call to
// complete.

// Next, when the code encounters a
// setTimeout function, a similar process occurs.

//  The V8 engine identifies this as another asynchronous operation and once
// again notifies
// libuv .

// Following this, when the code reaches a file operation (like reading or
// writing a file), the process is similar.
// The V8 engine recognizes this as another asynchronous task and alerts libuv .
// libuv then registers the file operation and its callback in the event loop.

// Next, when the code executes
// let c = multiplyFn(a, b); , the JavaScript engine creates a new function context for
// multiplyFn and pushes it onto the call stack.
//  The function takes two parameters,
// x and y, and within the function, the engine multiplies these values (
//  stores the result in the
// result variable.
//  a * b) and
// The JavaScript engine handles this operation as part of the synchronous code
// execution
//  Next, when the code executes
// let c = multiplyFn(a, b); , the JavaScript engine creates a new function context for multiplyFn and pushes it onto the call stack.

// Once the
// multiplyFn completes its execution and returns the result, the function context is
// popped off the call stack, and the result is assigned to the variable c

// .................................................

//IMPORTANT CONCEPT

//(1)
// When the function execution context is popped off the call stack, the
// garbage collector may clear any memory allocated for that context in the
// memory heap, if it is no longer needed.
//(2)
//  After console.log(c) is executed and the value of
// c is printed to the console,
// the global execution context will also eventually be removed from the call
// stack if the code execution is complete.
//(3)
//  With the global context popped off the call stack, the JavaScript engine has
// finished processing, and the program ends.
//(4)
//  Now the call stack becomes empty, the JavaScript engine can relax, as
// there is no more code to execute.
//(5)
// At this point,
// libuv takes over the major tasks. It handles operations such as
// processing timers, managing file system calls, and communicating with the
// operating system.
