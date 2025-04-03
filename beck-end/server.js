if(process.env.NODE_ENV !== 'production'){
    require('dotenv').config();
}

const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');

const session = require('express-session')
const flash = require('express-flash')
const passport = require('passport')

app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true,
}))

app.use(express.json());

app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: { sameSite: 'lax' }
}));

app.use(flash());
app.use(passport.initialize());
app.use(passport.session());

mongoose.connect(process.env.DATABASE_URL);
const db = mongoose.connection;
db.on('error', error => console.error(error));
db.once('open', () => console.log('Connected to Mongoose'));

const indexRouter = require('./routes/index');
const userRouter = require('./routes/users');

app.use('/', indexRouter); //coming here
app.use('/users', userRouter);

const port = process.env.PORT || 3000; 
app.listen(port);
console.log(`server running of port ${port} `);

// function checkNotAuthenticated(req, res, next){
//     if(req.isAuthenticated()) {
//         res.redirect('/')
//     }
//     next();
// }