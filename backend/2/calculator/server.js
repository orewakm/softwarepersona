function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        throw new Error('Division by zero is not allowed.');
    }
    return a / b;
}

function sqrt(a) {
    if (a < 0) {
        throw new Error('Square root of negative number is not allowed.');
    }
    return Math.sqrt(a);
}

function pow(a, b) {
    return Math.pow(a, b);
}

console.log(add(2, 3)); // Output: 5
console.log(subtract(5, 2)); // Output: 3
console.log(multiply(4, 6)); // Output: 24
console.log(divide(10, 2)); // Output: 5
console.log(sqrt(16)); // Output: 4
console.log(pow(2, 3)); // Output: 8
