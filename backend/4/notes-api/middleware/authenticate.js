const users = require('../data/users');
const authenticate = (req, res, next) => {
    const { username, password } = req.body ?? {};
    const user = users.find((u) => u.username === username && u.password === password);
    if (!user) {
        return res.status(401).json({ message: 'Invalid username or password' });
    }

    req.user = user;
    next();
};

const checkBody = (req, res, next) => {
    const { title, content, emphasis } = req.body;
    const missingFields = [];
    if (!title) missingFields.push('title');
    if (!content) missingFields.push('content');
    if (!emphasis) missingFields.push('emphasis');

    if (missingFields.length > 0) {
        return res
            .status(400)
            .json({ message: `Missing required fields: ${missingFields.join(', ')}` });
    }

    next();
};
module.exports = { authenticate, checkBody };
