const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());
// Serve static files from the 'public' directory
// app.use(express.static('public'));
users = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
    { id: 3, name: 'Charlie' },
];

app.get('/', (req, res) => {
    res.json({
        message: 'Hello, World!',
        status: 'working',
        code: 200,
    });
});

app.get('/about', (req, res) => {
    res.json({
        message: 'This is an example Express.js application.',
        status: 'working',
        code: 200,
    });
});

app.post('/users', (req, res) => {
    const { name } = req.body;
    if (!name) {
        return res.status(400).json({ message: 'Name is required' });
    }
    const newUser = { id: users.length + 1, name };
    users.push(newUser);
    res.status(201).json(newUser);
});

app.put('/users/:id', (req, res) => {
    const user = users.find((u) => u.id == req.params.id);
    if (user) {
        Object.assign(user, req.body);
        res.json({ message: 'User updated successfully', user });
    } else {
        res.status(404).json({ message: 'User not found' });
    }
});

app.delete('/users/:id', (req, res) => {
    const { id } = req.params;
    const userIndex = users.findIndex((u) => u.id === parseInt(id));
    if (userIndex === -1) {
        return res.status(404).json({ message: 'User not found' });
    }

    users.splice(userIndex, 1);
    res.status(204).send();
});

app.get('/search', (req, res) => {
    const { name } = req.query;
    if (!name) {
        return res.status(400).json({ message: 'Name query parameter is required' });
    }
    const filteredUsers = users.filter((user) =>
        user.name.toLowerCase().includes(name.toLowerCase())
    );
    res.json(filteredUsers);
});

app.get('/error', (req, res) => {
    throw new Error('This is a test error');
});

// wildcard route for handling 404 errors.
app.get('/products/*path', (req, res) => {
    res.json({ path: req.params.path });
});

app.get('/users{/:id}', (req, res) => {
    res.json({ message: req.params.id ?? 'All users' });
});

app.get('/users/*path', (req, res) => {
    res.status(404).json({
        message: 'User not found',
        status: 'error',
        code: 404,
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
