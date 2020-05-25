const express = require('express');
const app = express();
//const PORT = 3000
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const userRouter = require('./routers/userRouter');
dotenv.config()
const PORT = process.env.PORT;


mongoose.connect(process.env.DB_STRING, { useNewUrlParser: true, useUnifiedTopology: true }, () => {
    console.log('DB Connsction Up')
});




app.get('/', (req, res) => {
    res.send('hello world')
});

app.use('/user', userRouter);


app.listen(PORT, () => {
    console.log("Up At http://localhost:" + PORT);
});
