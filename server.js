import express from 'express';
import studentRoutes from './routes/studentRoutes.js';
// import empRouters from './routes/empRouters.js';
import orderRouter from './routes/orderRouter.js';

const app = express();
app.use(express.json());

app.use('/students', studentRoutes);
// app.use('/employees', empRouters);
app.use('/order', orderRouter);

app.listen(3200, () => {
    console.log('Server running on port http://localhost:3200');
});


// ******* Without ECMA ********

// const express = require('express');
// const app = express();

// app.get('/', (req, res) => {
//     res.send('Hello World from Express!');
// });

// app.get('/login', (req, res) => {
//     res.send('Login Page!');
// });

// app.listen(3000, () => {
//     console.log('Express Server running on http://localhost:3000');
// })