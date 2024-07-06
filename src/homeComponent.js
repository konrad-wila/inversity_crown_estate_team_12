// Component 1: Home Component
function homeComponent(req, res) {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello from the Home Component!\n');
}

module.exports = homeComponent;