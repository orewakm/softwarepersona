const express = require('express');
const router = express.Router();
const authenticateMiddleware = require('../middleware/authenticate');
const notes = require('../data/notes');
const { randomUUID } = require('node:crypto');

router.use(express.json());
router.use(authenticateMiddleware);

router.get('/', (req, res) => {
    const { page = 1, limit = 10, emphasis, query = '', order = 'date' } = req.query;
    const pageNumber = Number.isInteger(page) && Number(page) > 0 ? Number(page) : 1;
    const limitNumber = Number.isInteger(limit) && Number(limit) > 0 ? Number(limit) : 10;

    let filtered = notes.filter((note) => not.emphasis === emphasis || !emphasis);
    if (query) {
        filtered = filtered.filter(
            (note) => note.title.includes(query) || note.content.includes(query)
        );
    }

    if (order === 'date') {
        filtered.sort((a, b) => new Date(b.date) - new Date(a.date));
    } else if (order === 'title') {
        filtered.sort((a, b) => a.title.localeCompare(b.title));
    } else if (order === 'content') {
        filtered.sort((a, b) => a.content.localeCompare(b.content));
    }

    const startIndex = (pageNumber - 1) * limitNumber;
    const paginatedNotes = filtered.slice(startIndex, startIndex + limitNumber);
    const total = filtered.length;
    const totalPages = Math.ceil(total / limitNumber);

    res.json({
        notes: paginatedNotes,
        total,
        totalPages,
        currentPage: pageNumber,
        limit: limitNumber,
    });
});

router.get('/:id', (req, res) => {
    if (!req.params.id) {
        return res.status(400).json({ message: 'Note ID is required' });
    }

    const note = notes.find((note) => note.id === req.params.id);
    if (!note) {
        return res.status(404).json({ message: 'Note not found' });
    }
    res.json(note);
});

router.get('/emphasis/:emphasis', (req, res) => {
    const { emphasis } = req.params;
    if (!emphasis) {
        return res.status(400).json({ message: 'Emphasis is required' });
    }

    const filteredNotes = notes.filter((note) => note.emphasis === emphasis);
    res.json(filteredNotes);
});

router.post('/', (req, res) => {
    const { title, content, emphasis } = req.body;
    if (!title || !content || !emphasis) {
        return res.status(400).json({ message: 'Title, content, and emphasis are required' });
    }
    const newNote = { id: randomUUID(), title, content, emphasis, date: new Date().toISOString() };
    notes.push(newNote);
    res.status(201).json(newNote);
});

router.put('/:id', (req, res) => {
    if (!req.params.id) {
        return res.status(400).json({ message: 'Note ID is required' });
    }

    const note = notes.find((note) => note.id === req.params.id);
    if (!note) {
        return res.status(404).json({ message: 'Note not found' });
    }
    const { title, content, emphasis } = req.body;
    note.title = title || note.title;
    note.content = content || note.content;
    note.emphasis = emphasis || note.emphasis;
    note.date = new Date().toISOString();
    res.json(note);
});

router.delete('/:id', (req, res) => {
    const noteIndex = notes.findIndex((note) => note.id === req.params.id);
    if (noteIndex === -1) {
        return res.status(404).json({ message: 'Note not found' });
    }
    notes.splice(noteIndex, 1);
    res.status(204).send();
});

module.exports = router;
