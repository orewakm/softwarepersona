const http = require('http');

const server = http.createServer((req, res) => {
    console.log(`Request received. URL: ${req.url} | Method: ${req.method}`);

    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(
        JSON.stringify({
            message: 'Hello World',
            success: true,
        })
    );
});

server.listen(3000, () => {
    console.log('Server is listening on port 3000');
});
