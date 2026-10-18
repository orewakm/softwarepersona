const express = require('express');
const app = express();
const PORT = 3000;
app.use(express.json());

const users = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
    { id: 3, name: 'Charlie' },
];

const categories = [
    { id: 1, name: 'Category 1' },
    { id: 2, name: 'Category 2' },
    { id: 3, name: 'Category 3' },
];

app.get('/users', (req, res) => {
    res.json(users);
});

app.get('/categories', (req, res) => {
    res.json(categories);
});

app.get('/categories/:categoryId/products/:productId', (req, res) => {
    const { categoryId, productId } = req.params;
    res.json({ categoryId, productId });
});

app.get('/products', (req, res) => {
    const { page = 1, limit = 10 } = req.query;
    res.json({ message: `Page: ${page}, Limit: ${limit}` });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
