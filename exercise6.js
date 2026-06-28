import express from 'express'
import path from 'path'

const abspath = path.resolve('html');

const app = express();

app.use(express.static('css'));
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, resp) => {
    resp.send('<h1>Heading</h1>');
});

app.get("/index", (res, resp) => {
    resp.sendFile(abspath + '/exercie6.html');
});

app.get("/home", (res, resp) => {
    resp.render('exercise6');
});

app.post("/ex6Data", (res, resp) => {
    // Type - I
    const name = res.body.name;
    resp.render('exercise6Data', { name });

    // Type - II
    // const data = res.body;
    // resp.render('exercise6Data', data);
});

app.listen(3200, () => {
    console.log("server running on http://localhost:3200");
});