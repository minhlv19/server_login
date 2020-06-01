const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const postRoute = require('./routers/posts')

const authRoute = require('./routers/auth')

dotenv.config()

mongoose.connect(
    process.env.DB_CONNECT,
    {useNewUrlParser: true},
    () => console.log('connected to db'))


//Middleware
app.use(express.json());
app.use('/api/posts',postRoute);
//Router Middeleware
app.use('/api/user', authRoute);

app.listen(3000, () => console.log('server run 3000'))
