const http = require('http');
const homeComponent = require('./src/homeComponent');

// Create an HTTP server
const server = http.createServer((req, res) => {
    if (req.url === '/') {
        homeComponent(req, res);
    } else {
        res.statusCode = 404;
        res.setHeader('Content-Type', 'text/plain');
        res.end('404 Not Found\n');
    }
});

// The server listens on port 3000
const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});
