import express from 'express'
import path from 'path'
const abspath = path.resolve('html');
const abspaths = path.resolve();

const app = express();

app.use(express.static('css'));

app.get("/", (req, resp) => {
    resp.sendFile(abspath + "/exercise2.html");
})

// app.get("/login", (req, resp) => {
//     resp.send("<h1>Login page</h1>");
// })

app.get("/login", (req, resp) => {
    resp.sendFile(abspaths + "/dummy.js");
})

app.get("/submit", (req, resp) => {
    resp.send("<h1>Submit page</h1>");
})


app.listen(3200, () => {
    console.log('Server running on http://localhost:3200');
});