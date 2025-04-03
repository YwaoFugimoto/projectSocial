const express = require('express')
const router= express.Router()
const User = require('../models/user')
const bcrypt = require('bcrypt')


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

// router.post('/login', async (req, res) => {
//     const user = new User({
//         user_login: req.body.user_login,
//         user_password: req.body.user_password
//     })

//     try{
//         const find = await User.findOne({user_login: req.body.user_login})
//         if(find){
//             const match = bcrypt.compare(find.user_password, user.user_password)
//             if(match){
//                 //res.redirect('/home')
//                 return res.status(200).json({message: "Login successful"})
//             }else{
//                 return res.status(404).json({message: "Login or password incorrect"})
//             }
//         }else{
//             return res.status(404).json({message: "Login not foud"})
//         }
//     } catch (error){
//         return res.status(500).json(error)
//     }
// })

router.post('/login', async (req, res) => {
    try {
      const { user_login, user_password } = req.body;
      // Busca o usuário pelo user_login
      const foundUser = await User.findOne({ user_login });
      if (!foundUser) {
        return res.status(404).json({ message: "Login not found" });
      }
      const match = await bcrypt.compare(user_password, foundUser.user_password);
      if (match) {
        // Retorna resposta JSON com sucesso
        // res.redirect('/home')
        return res.status(200).json({ message: "Login successful", user: foundUser });
        // return res.redirect('/home');
      } else {
        return res.status(401).json({ message: "Login or password incorrect" });
      }
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  });
  
  router.delete('/deleteAll', async (req, res) => {
    try{
      const del = await User.deleteMany({});
      return res.status(200)
    }catch (error) {
      return res.status(500).json(error)
    }
  })




module.exports = router;