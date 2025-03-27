const express = require('express');
const connection = require('../connnection');
const router = express.Router();

router.get('/:page', async(req, res) => {
    try{
    const offset = parseInt(req.params.page, 10) * 10;
    const [ result ] = await connection.execute(
        `select * from social limit 10 offset ${offset}`,
        [ offset ]    
    );
        return res.status(200).json(result);
    }catch (error){
        return res.status(500).json(error);
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

router.post('/login', async(req, res) => {
    try{
        const { user_login, user_password } = req.body;
        const [ result ] = await connection.execute(
            "select * from social where user_login=? and user_password=?",
            [user_login, user_password]
        );
    res.status(200).json({message: "Login successeful", user: result[0]});
    }catch (error){
        console.log("Login error: ", error);
        res.status(500).json({error: "ERROR!"});
    };
});

router.patch('/profilePassword/:id', async(req, res) => {
    try{
        const user_id  = req.params.id; // TODO Something will have to keep user_id
        const { user_password } = req.body;
        console.log(user_id, user_password);
        const [ result ] = await connection.execute(
            "update social set user_password=? where user_id=?",
            [ user_password, user_id ]
        );
    res.status(200).json({message: "Password changed successfully!", user: result[0]});
    }catch (error){
        console.log("Update error", error);
        res.status(500).json({error: "ERROR!"});
    };
});
router.patch('/profileUsername/:id', async(req, res) => { // username change
    try{
        const user_id = req.params.id;
        const { username } = req.body;
        const [ result ] = await connection.execute(
            "update social set username=? where user_id=?",
            [ username, user_id]
        );
    res.status(200).json({message: "Usernaeme changed successfully", user: result[0]});
    }catch (error){
        console.log("Username update error", error);  
        res.status(500).json({error: "ERROR!"});  
    };
});

router.delete('/delete/:id', async(req, res) => {
    try{
        const user_id = req.params.id;
        const [ result ] = await connection.execute(
            "delete from social where user_id=?",
            [ user_id ]
        );
    res.status(200).json({message: "User deleted successfully!", user: result[0]});
    }catch (error){
        console.log("Delete failled");
        res.status(500).json({error: "ERROR!"});
    };
});

module.exports = router;