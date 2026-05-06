const express = require('express');
const app = express();



app.get('/', (req, res) => {
    res.send('Hello World from Express!');
});

app.get('/login', (req, res) => {
    res.send('Login Page!');
});

app.listen(3000, () => {
    console.log('Express Server running on http://localhost:3000');
})