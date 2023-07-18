const express = require('express');

require('dotenv').config();

const connectToDb = require('./config/db');
const userRouters = require('./routers/userRouters');

const app = express();

//connection to db
connectToDb();

app.use(express.json());

const PORT = process.env.PORT;

app.use('/api/user', userRouters);

app.listen(PORT, ()=> {
    console.log(`Server listening at ${PORT}`);
});

