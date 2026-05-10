import express from 'express';
import path from 'path';

const app = express();

//Form Details get in second page that time use
app.use(express.urlencoded({ extended: false }))

//Static file import that time use like now style.css file export
app.use(express.static('css'))

// Absolute Server Path Get
const abspath = path.resolve();

app.get("/", (req, resp) => {
    resp.sendFile(abspath + "/html/exercise1.html");
})

app.get("/login", (req, resp) => {
    // resp.send("<h1>Login Page</h1>");
    resp.sendFile(abspath + "/html/exercise1_login.html");
})

app.post("/submit", (req, resp) => {
    console.log(req.body);
    resp.send("Successfully Login<br><br>"
        + "Email ==> " + req.body.email
        + "<br>Password ==> " + req.body.password
    );
})

app.listen(3400, () => {
    console.log("Server running on http://localhost:3400");
})