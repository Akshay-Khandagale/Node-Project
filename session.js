import express from "express";
import session from 'express-session';

const app = express();

app.use(session({
    secret: 'apple'
}))

app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: true }))

app.get("/login", (req, resp) => {
    resp.render('login')
})

app.post("/profile", (req, resp) => {
    req.session.data = req.body;
    console.log(req.session.data);
    resp.render('profile', req.session.data);
})

app.get("/demo", (req, resp) => {
    resp.send(req.session.data);
})

app.listen(3500, () => {
    console.log("server running on http://localhost:3500");
})