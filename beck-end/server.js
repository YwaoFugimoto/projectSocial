if(process.env.NODE_ENV !== 'production'){
    require('dotenv').config();
}

const express = require('express');
const app = express();
const cors = require('cors');

///////// PASSWORD ENCRYPT
// const passport = require('passport')
// const flash = require('express-flash')
// const session = require('express-session')


app.use(cors())
app.use(express.json());

const indexRouter = require('./routes/index');
const userRouter = require('./routes/users');

const mongoose = require('mongoose');
mongoose.connect(process.env.DATABASE_URL);
const db = mongoose.connection;
db.on('error', error => console.error(error));
db.once('open', () => console.log('Connected to Mongoose'));

app.use('/', indexRouter);
app.use('/users', userRouter);


const port = process.env.PORT || 3000; 
app.listen(port);
console.log(`server running of port ${port} `);


///////// PASSWORD ENCRYPT

// const initializePassport = require('./passport-config');
// initializePassport(
//     passport, 
//     user_login => users.find(user => user.user_login === user_login ),
//     user_id => user.find(user => user.user_id === user_id)    
// )

// app.use(flash())
// app.use(session({
//     secret: process.env.SESSION_SECRET,
//     resave: false,
//     saveUninitialized: false
// }))

// app.use(passport.initialize())
// app.use(passport.session())

// app.use('/login', passport.authenticate('local', {
//     successRedirect: '/home',
//     failureRedirect: '/login',
//     failureFlash: true
// }))

