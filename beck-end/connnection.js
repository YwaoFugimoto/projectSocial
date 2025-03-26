const mysql = require('mysql2');

var connection = mysql.createPool({
    port: 3306,
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'crud'
});

connection.getConnection((err) => {
    if(!err)
        console.log('Database connection successful!');
    else    
        console.log(err);
});

module.exports = connection

