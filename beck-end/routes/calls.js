const express = require('express');
const connection = require('../connnection');
const router = express.Router();

router.get('/:page', (req, res) => {
    const query = 'select * from social limit 10 offset ?';
    let offset = req.params.page;
    offset = 10 * offset;
    connection.query(query, [offset], (err, result) => {
        if(!err)
            return res.status(200).json(result);
        else   
            return res.status(500).json(err);
    });
});

router.post('', (req, res) => {
    const query = 'insert into social (user_login, user_password, posts) values ?';
    const body = req.body.data;
    let values = body.map(body => [
        body.user_login, 
        body.user_password, 
        body.posts
    ]);
    connection.query(query, [values], (err, result) => {
        if(!err)
            return res.status(200).json({"Iten(s) added successfully!": body});
        else
            return res.status(500).json(err);
    });
});

router.patch('/:id', (req, res) => {
    let query = 'update social set ';
    const id = req.params.id;
    const body = req.body;
    let values = [];

    Object.keys(body).forEach((key, index) => {
        query += `${key}=?`;
        if(index < Object.keys(body).length - 1){
            query += ', ';
        }
        values.push(body[key]);
    })
    query += 'where user_id=?';
    values.push(id);

    connection.query(query, values, (err, result) => {
        if(!err){
            if(result.affectedRows == 0)
                res.status(404).json({message: "Id not found!"});
            res.status(200).json({'Iten updated (patch) successfully!': body});
        }else{
            res.status(500).json(err);
        }
    });
});

router.put('/:id', (req, res) => {
    const query = 'update social set user_login=?, user_password=?, posts=? where user_id=?';
    const id = req.params.id;
    const body = req.body;
    connection.query(query, [body.user_login, body.user_password, body.posts, id], (err, result) => {
        if(!err){
            if(result.affectedRows == 0)
                res.status(404).json({message: "Id not found!"});
            res.status(200).json({'Iten updated (put) successfully!': body});
        }else{
            res.status(500).json(err);
        }
    });
});

router.delete('/:id', (req, res) => {
    const query = 'delete from social where user_id=?';
    const findQuery = 'select * from social where user_id=?';
    const id = req.params.id;
    let objectFind = [];
    
    connection.query(findQuery, id, (err, result) => {
        if(!err){
            if(result.affectedRows == 0)
                res.status(404).json({message: "Id not found!"});
            objectFind = result;
        }else{
            res.status(500).json(err);
        }
    })

    connection.query(query, id, (err, result) => {
        if(!err){
            if(result.affectedRows == 0)
                res.status(404).json({message: "Id not found!"});
            res.status(200).json({"Iten deleted successfully!": objectFind});
        }else{
            res.status(500).json(err);
        }
    });
});
module.exports = router;