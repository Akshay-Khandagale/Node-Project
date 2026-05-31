import express from 'express'
import path from 'path'

const app = express();

app.set("view engine", "ejs");

const absolutePath = path.resolve("html");

app.use(express.static('css'));
app.use(express.urlencoded({ extended: false }))

app.get("/", (req, resp) => {
    resp.sendFile(absolutePath + '/ex3All_concept.html');
})

app.get("/login", (req, resp) => {
    resp.sendFile(absolutePath + '/ex3All_concept_login.html');
});

app.post("/submit", (req, resp) => {
    console.log(req.body);
    resp.render('ex3All_concept_submit', req.body)
});

app.listen(3200, () => {
    console.log("Server Running on http://localhost:3200");
})