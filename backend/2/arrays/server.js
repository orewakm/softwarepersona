const users = [
    { id: 1, firstName: 'Alice' },
    { id: 2, firstName: 'Bob' },
    { id: 3, firstName: 'Charlie' },
];

// Methods
users.find((u) => u.id == 3);

users.filter((u) => u.firstName === 'Alice');

users.map((u) => u.firstName);

//Destructing

const person = {
    name: 'Akmuhammet',
    age: 22,
    city: 'Istanbul',
};

const { name, age, city } = person;

const updatedPerson = { ...person, age: 23 };

//Spread

const numbers = [1, 2, 3];

const newNumbers = [...numbers, 4, 5];

function sayHi({ name }) {
    return `Hello, ${name}!`;
}
