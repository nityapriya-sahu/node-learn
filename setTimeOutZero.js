console.log("Hello World !!!");

var a = 50;
var b = 80;

setTimeout(() => {
  console.log("Call me right now!!");
}, 0); //Trust Issues with setTimeout

setTimeout(() => {
  console.log("Call me after 3 seconds!");
}, 3000);

function multiply(a, b) {
  let resMultiply = a * b;
  return resMultiply;
}

var c = multiply(a, b);
console.log("Result is : ", c);

//////////////////////////////////////////////////////////////////////////////

// Why is setTimeout(0) Executed After the Multiplication Result?

//  You might wonder why the setTimeout(0) callback is executed after other code, like
// the multiplication result, even though we set the delay to 0 milliseconds.

//  The Reason:

//  Asynchronous Operation: setTimeout is an asynchronous function, meaning it doesn't block the execution of the code.
// When you call setTimeout , the callback function is passed to Libuv (Node.js's underlying library),
// which manages asynchronous operations.

//  Event Loop and Call Stack: The callback function from setTimeout(0) is added to the event queue.
// However, it won't be executed until the current call stack is empty. This means that even if you specify a 0-millisecond delay,
//  the callback will only execute after the global execution context is done.

//Trust Issues with setTimeout(0) : When you ask the code to run after 0 milliseconds,
// it doesn't necessarily run immediately after that time. It runs only when the call stack is empty.
// This introduces some "terms and conditions," meaning that the actual execution timing is dependent on the state of the call stack.
