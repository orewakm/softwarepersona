const express = require('express');
const users = require('./data/users');
const notesRouter = require('./routes/routes');
const loggerMiddleware = require('./middleware/logger');
const { checkBody } = require('./middleware/authenticate');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(loggerMiddleware);
app.use(express.json());
app.use(checkBody);

app.use('/notes', notesRouter);

if (require.main === module) {
    app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}`);
    });
}

module.exports = app;
