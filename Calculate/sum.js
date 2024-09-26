//Modules protect their variables and functions from leaking by default.

var x = "hello world";

function calculateSum(a, b) {
  let sum = a + b;
  console.log(sum);
}

console.log(module.exports, "hhhhhhh");

module.exports = { calculateSum, x };
