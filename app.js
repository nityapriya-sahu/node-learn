// require("./xyz");

// const { calculateSum, x } = require("./Calculate/sum");
// const { calculateMultiply } = require("./Calculate/multiply");

// or import from index.js file
const { calculateMultiply, calculateSum, x } = require("./Calculate/index");

// or we can import it  like (ESM)
// import { calculateSum, x } from "./sum.js";

const data = require("./data.json");
console.log(data, "JSON DATA");

// var name = "Nitya Priya";
var a = 50;
var b = 20;
// console.log(name);
// console.log(a + b);

// console.log(global); //gives global object

// console.log(globalThis); // --do--

// console.log(this); // gives empty object

console.log(globalThis === global); //true

console.log(global === this); //false
//=====================================================

calculateSum(a, b);
console.log(x);

//===================================

calculateMultiply(a, b);
