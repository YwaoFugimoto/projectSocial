const express = require('express')
const router= express.Router()
const User = require('../models/user')
const bcrypt = require('bcrypt')
const passport = require('passport')

const initializePassport = require('../passport-config')

initializePassport(
  passport, 
  async (user_login) => await User.findOne({ user_login }),
  async (id) => await User.findById(id), 
)

function ensureAuthenticated(req, res, next) { //check if user is authenticated
  if (req.isAuthenticated()) {
    return next();
  }
  return res.status(401).json({ message: "User not authenticated" });
}


router.get('/users', async (req, res) => {
    try {
        const users = await User.find(); // Retorna todos os usuários
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ error });
    }
    });

router.post('/signin', async (req, res) => {
    const user = new User({
        user_login: req.body.user_login,
        user_password: req.body.user_password,
        username: req.body.username
    })
    try{
        const notUnique = await User.findOne({user_login: req.body.user_login}) //checking unique user_login
        if (notUnique)
            return res.status(409).json({message: "Login already in use"});
        const hashedPassword = await bcrypt.hash(user.user_password, 10);
        user.user_password = hashedPassword
        const newUser = await user.save();
        return res.status(201).json({message: "User created", newUser});
    } catch (error){
        return res.status(500).json({error})
    }

    })

router.post('/login', (req, res, next) => {
  passport.authenticate('local', (err, user, info) => {
    if (err) {
      return res.status(500).json({ message: "at user.js /login", error: err.message });
    }
    // user = 'pedro'
    if (!user) {
      return res.status(401).json({ message: "Login failed at User", info });
    }
    console.log(user)
    req.logIn(user, (err) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      return res.status(200).json({ message: "Login successful", user });
    });
  })(req, res, next);
});

router.get('/authStatus', ensureAuthenticated, ( req, res ) => {
  res.status(200).json({ user: req.user });
})





router.get('/account', ensureAuthenticated, (req, res) => {
  return res.status(200).json({ user: req.user });
});

router.get('/home', ensureAuthenticated, (req, res) => {
  return res.status(200).json({ user: req.user});
});


module.exports = router;