require('./config/db');

const express = require('express');
const app = express();

app.use(express.json());

const userRouter = require('./routes/user.router');
app.use('/users', userRouter);

const skillRouter = require('./routes/skill.router');
app.use('/skills', skillRouter);

app.listen(3000, () => {
    console.log('App started!');
})
