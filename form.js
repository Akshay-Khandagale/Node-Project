const http = require('http');

http.createServer((req, resp) => {
    resp.writeHead(200, { "content-type": 'text/html' })
    // console.log(req);
    if (req.url == '/') {
        resp.write(`
            <form action="/submit" method="Post">
                <input type="text" placeholder="Enter The Name" name="name">
                <input type="text" placeholder="Enter The Email" name="email">
                <input type="submit" value="submit">
            </form>
        `);
        resp.end();
    } else if (req.url == '/submit') {
        resp.write("<h1>Data Submited</h1>")
        resp.end()
    }
}).listen(3900)