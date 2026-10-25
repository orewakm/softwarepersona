const { randomUUID } = require('node:crypto');

const data = [
    {
        id: randomUUID(),
        title: 'Note 1',
        content: 'This is the content of note 1',
        emphasis: 'important',
        date: new Date().toISOString(),
    },
    {
        id: randomUUID(),
        title: 'Note 2',
        content: 'This is the content of note 2',
        emphasis: 'normal',
        date: new Date().toISOString(),
    },
    {
        id: randomUUID(),
        title: 'Note 3',
        content: 'This is the content of note 3',
        emphasis: 'normal',
        date: new Date().toISOString(),
    },
    {
        id: randomUUID(),
        title: 'Note 4',
        content: 'This is the content of note 4',
        emphasis: 'important',
        date: new Date().toISOString(),
    },
    {
        id: randomUUID(),
        title: 'Note 5',
        content: 'This is the content of note 5',
        emphasis: 'normal',
        date: new Date().toISOString(),
    },
    {
        id: randomUUID(),
        title: 'Note 6',
        content: 'This is the content of note 6',
        emphasis: 'normal',
        date: new Date().toISOString(),
    },
    {
        id: randomUUID(),
        title: 'Note 7',
        content: 'This is the content of note 7',
        emphasis: 'important',
        date: new Date().toISOString(),
    },
    {
        id: randomUUID(),
        title: 'Note 8',
        content: 'This is the content of note 8',
        emphasis: 'normal',
        date: new Date().toISOString(),
    },
    {
        id: randomUUID(),
        title: 'Note 9',
        content: 'This is the content of note 9',
        emphasis: 'normal',
        date: new Date().toISOString(),
    },
    {
        id: randomUUID(),
        title: 'Note 10',
        content: 'This is the content of note 10',
        emphasis: 'important',
        date: new Date().toISOString(),
    },
    {
        id: randomUUID(),
        title: 'Note 11',
        content: 'This is the content of note 11',
        emphasis: 'normal',
        date: new Date().toISOString(),
    },
    {
        id: randomUUID(),
        title: 'Note 12',
        content: 'This is the content of note 12',
        emphasis: 'normal',
        date: new Date().toISOString(),
    },
];

module.exports = data;
