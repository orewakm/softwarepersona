const express = require('express');
const notesRouter = require('./routes/notes');

const PORT = 3000;

const app = express();
app.use(express.json());

app.use('/notes', notesRouter);
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
