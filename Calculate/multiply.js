function calculateMultiply(a, b) {
  let multiply = a * b;
  console.log(multiply);
}

module.exports = { calculateMultiply };

//module: Node.js is adding module

//===============================================

// function wrapped inside a function, this function has a parameter named module. It's an object provided by Node.js include module.exports

(function (module) {
  //All code of module runs inside here
  function calculateMultiply(a, b) {
    let multiply = a * b;
    console.log(multiply);
  }
  module.exports = { calculateMultiply };
})(module);
