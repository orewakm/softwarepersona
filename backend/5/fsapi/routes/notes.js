const express = require('express');
const router = express.Router();

const { readNotes, writeNotes } = require('../utils/readWrite');

router.get('/', (req, res) => {
    const notes = readNotes();
    res.json(notes, { message: 'Notes retrieved successfully' });
});

router.post('/', (req, res) => {
    const { title, content } = req.body;
    if (!title || !content) {
        return res.status(400).json({ error: 'Title and content are required' });
    }

    const notes = readNotes();
    const newNote = { id: Date.now(), title, content };
    notes.push(newNote);
    writeNotes(notes);

    res.status(201).json(newNote, { message: 'Note created successfully' });
});

app.delete('/:id', (req, res) => {
    const noteId = Number(req.params.id);
    if (isNaN(noteId)) {
        return res.status(400).json({ error: 'Invalid note ID' });
    }

    const notes = readNotes();
    const noteIndex = notes.findIndex((note) => note.id === noteId);
    if (noteIndex === -1) {
        return res.status(404).json({ error: 'Note not found' });
    }

    const deletedNote = notes.splice(noteIndex, 1)[0];
    writeNotes(notes);

    res.json({ message: 'Note deleted successfully', deletedNote });
});

module.exports = router;
