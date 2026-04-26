const http = require('http');
const home = require('./home');

console.log(home);

const server = http.createServer((req, res) => {

    if (req.url === '/' && req.method === 'GET') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('API is running...');
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Not Found');
    }

});

server.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});