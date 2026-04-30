const http = require('http');

http.createServer((req, resp) => {
    resp.write();

}).listen(3000)