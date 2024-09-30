const crypto = require("crypto");

console.log("Hello World");

var a = 50;
var b = 80;

//pbkdf2 = Password Base Key Derivative Function
//Synchronous Function - Will BLOCK THE MAIN THREAD - DON"T USE IT.

crypto.pbkdf2Sync("password", "salt", 5000000, 50, "sha512");
console.log("First key is generated");

//Async Function
crypto.pbkdf2("password", "salt", 5000000, 50, "sha512", (err, key) => {
  console.log("Second key is generated");
});

function multiply(a, b) {
  let resMultiply = a * b;
  return resMultiply;
}

var c = multiply(a, b);
console.log("Result is : ", c);

/////////////////////////////////////////////////////////

// What is crypto ?

// Node.js has a core library known as crypto , which is used for cryptographic operations like generating secure keys, hashing passwords, and more.

//  The crypto module is one of the core modules provided by Node.js, similar to other core modules like https , fs (file system), and zlib (used for compressing files).

// These core modules are built into Node.js, so when you write require('crypto') , you're importing a module that is already present in Node.js.

//  You can also import it using require('node:crypto') to explicitly indicate that itʼs a core module, but this is optional.
