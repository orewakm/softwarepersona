function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function sayHi(name = 'Akmuhammet') {
    return `Hello, ${name}!`;
}
const add2 = (a, b) => a + b;

const subtract22 = (a, b) => a - b;

const multiply2 = (a, b) => a * b;

console.log(add(2, 3)); // Output: 5

console.log(subtract(5, 2)); // Output: 3

console.log(multiply(4, 6)); // Output: 24

console.log(add2(10, 15)); // Output: 25

console.log(subtract22(20, 5)); // Output: 15

console.log(multiply2(3, 7)); // Output: 21

console.log(sayHi('Guest')); // Output: Hello, Akmuhammet!
