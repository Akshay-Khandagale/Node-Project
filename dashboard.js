const http = require('http');
const fs = require('fs');

http.createServer((req, resp) => {

    console.log(req.url);

    let collectHeaderData = fs.readFileSync("html/header.html", 'utf-8')

    let file = "/dash";
    if (req.url != '/') {
        file = req.url;
    }
    console.log("html" + file + ".html");
    if (req.url != '/dash.css') {
        fs.readFile("html" + file + ".html", 'utf-8', (error, data) => {
            if (error) {
                resp.writeHead(500, { "content-type": "text/plain" })
                resp.end("internal server error")
                return false
            }
            resp.write(collectHeaderData + "" + data);
            resp.end();
        })
    } else if (req.url == '/dash.css') {
        fs.readFile("html/dash.css", 'utf-8', (error, data) => {
            if (error) {
                resp.writeHead(500, { "content-type": "text/plain" })
                resp.end("Css File Not Found")
                return false
            }
            resp.writeHead(200, { "content-type": "text/css" })
            resp.end(data);
        })
    }



}).listen(3600);