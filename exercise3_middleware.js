import express from 'express'
const app = express();

function checkAgeMiddleware(req, resp, next) {
    if (!req.query.age || req.query.age < 18) {
        resp.send("Alert You cannot access this page");
    } else {
        next();
    }
}

app.use(checkAgeMiddleware)

app.get('/', (req, resp) => {
    resp.send('<h1>Home Page</h1>');
})

app.get('/users', (req, resp) => {
    resp.send('<h1>User Page</h1>');
})


app.listen(3200, () => {
    console.log('Server running on http://localhost:3200');
})