import express from 'express'
import path from 'path';

const app = express();
const abspath = path.resolve('html');

app.use(express.static('css'));

app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, resp) => {
    resp.sendFile(abspath + '/exercise5.html');
})

app.post('/submit', (req, resp) => {
    resp.sendFile(abspath + '/exsubmit5.html');
})

// EJS File

app.get('/login', (req, resp) => {
    resp.render('exlogin');
})

app.post('/loginData', (req, resp) => {
    console.log(req.body);
    const Data = req.body;

    resp.render("saveCredential", Data);
});

app.listen(3200, () => {
    console.log("Server runnning on http://localhost:3200");
});