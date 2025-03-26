const express = require('express');
const app = express();
const userRoute = require('./routes/calls');
const cors = require('cors')

app.use(cors());
app.use(express.json());
app.use('/social', userRoute);

module.exports = app;
