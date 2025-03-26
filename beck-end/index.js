const express = require('express');
const app = express();
const userRoute = require('./routes/calls');

app.use(express.json());
app.use('/social', userRoute);

module.exports = app;
