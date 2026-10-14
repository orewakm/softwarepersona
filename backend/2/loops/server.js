const score = 85;

if (score >= 90) {
    console.log('Grade: A');
} else if (score >= 80) {
    console.log('Grade: B');
} else if (score >= 70) {
    console.log('Grade: C');
} else {
    console.log('Grade: F');
}

for (let i = 0; i < 10; i++) {
    console.log(i);
}

const fruits = ['apple', 'banana', 'orange'];
fruits.forEach((fruit) => {
    console.log(fruit);
});

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}
