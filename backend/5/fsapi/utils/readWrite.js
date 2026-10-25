const fs = require('fs');
const fsPromises = require('fs').promises;
const path = require('path');

const notesFile = path.join(__dirname, '..', 'data', 'notes.json');

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

function asyncReadNotes() {
    try {
        return fsPromises
            .readFile(notesFile, 'utf-8')
            .then((data) => JSON.parse(data))
            .catch((err) => {
                console.error('Error reading notes asynchronously:', err);
                return [];
            });
    } catch (err) {
        console.error('Error reading notes asynchronously:', err);
        return Promise.resolve([]);
    }
}

module.exports = {
    readNotes,
    writeNotes,
};

if (require.main === module) {
    console.log('Current notes:', readNotes());
    const newNotes = [...readNotes(), { id: Date.now(), title: 'New Note', content: 'New note' }];
    writeNotes(newNotes);
    console.log('Notes updated!');
}
