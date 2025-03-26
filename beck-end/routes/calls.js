const express = require('express');
const connection = require('../connnection');
const router = express.Router();

router.get('/:page', async(req, res) => {
    try{
    const offset = req.params;
    const [ result ] = await connection.execute(
        'select * from social limit 10 offset ?',
        [offset]    
    );
        return res.status(200).json(result);
    }catch (error){
        return res.status(500).json(err);

    }});


router.post('/signin', async(req, res) => {
    try{
        const {user_login, user_password, username} = req.body;
        //console.log(user_login, user_password, username);
        const [ result ] = await connection.execute(
            'insert into social (user_login, user_password, username) values (?, ?, ?)',
            [user_login, user_password, username]
        );
        res.status(201).json({message: "User created!", userId: result.insertId});
    }catch (error) {
        console.error("SignIn Error:", error.message);
        console.error(error.stack);
        res.status(500).json({ error: 'Error creating user' });
    }});

module.exports = router;