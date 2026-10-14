const funcs = require('./server');

const addFunc = funcs.add;
const subtractFunc = funcs.subtract;
const multiplyFunc = funcs.multiply;

console.log(addFunc(2, 3)); // Output: 5
console.log(subtractFunc(5, 2)); // Output: 3
console.log(multiplyFunc(4, 6)); // Output: 24
