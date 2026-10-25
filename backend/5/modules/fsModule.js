const fs = require('fs');
const path = require('path');

const notesFile = path.join(__dirname, 'data', 'notes.json');

function readNotes() {
    try {
        if (!fs.existsSync(notesFile)) {
            return [];
        }
        const data = fs.readFileSync(notesFile, 'utf-8');
        return JSON.parse(data);
    } catch (err) {
        console.error('Error reading notes:', err);
        return [];
    }
}

function writeNotes(notes) {
    try {
        if (!fs.existsSync(notesFile)) {
            fs.writeFileSync(notesFile, '[]', 'utf-8');
        }
        const data = JSON.stringify(notes, null, 2);
        fs.writeFileSync(notesFile, data, 'utf-8');
        return true;
    } catch (err) {
        console.error('Error writing notes:', err);
        return false;
    }
}
