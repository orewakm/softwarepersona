const { randomUUID } = require('node:crypto');

const users = [
    {
        id: randomUUID(),
        username: 'akm',
        password: 'password123',
    },
    {
        id: randomUUID(),
        username: 'johndoe',
        password: 'password456',
    },
    {
        id: randomUUID(),
        username: 'janedoe',
        password: 'password789',
    },
    {
        id: randomUUID(),
        username: 'alice',
        password: 'passwordabc',
    },
    {
        id: randomUUID(),
        username: 'bob',
        password: 'passworddef',
    },
    {
        id: randomUUID(),
        username: 'charlie',
        password: 'passwordghi',
    },
    {
        id: randomUUID(),
        username: 'david',
        password: 'passwordjkl',
    },
];

module.exports = users;
