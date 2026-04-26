const http = require('http');

// Array of Object
const userData = [
    {
        name: 'akshay',
        age: 25,
        email: 'ak@test.com'
    },
    {
        name: 'sk',
        age: 26,
        email: 'sk@test.com'
    },
    {
        name: 'cf',
        age: 23,
        email: 'cf@test.com'
    }
]

http.createServer((req, resp) => {
    resp.setHeader("Content-Type", 'application/json');
    resp.write(JSON.stringify(userData));
    resp.end();
}).listen(3200);

