require('./config/db');

const cors = require('cors');

const express = require('express');
const app = express();

app.use(cors());

app.use(express.json());

const userRouter = require('./routes/user.router');
app.use('/users', userRouter);

const skillRouter = require('./routes/skill.router');
app.use('/skills', skillRouter);

const jobRouter = require('./routes/job.router');
app.use('/jobs', jobRouter);

app.listen(3000, () => {
    console.log('App started!');
})

