const mysql = require('mysql2/promise');

var connection = mysql.createPool({
    port: 3306,
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'crud'
});

connection.getConnection()
    .then(conn => {
        console.log('Database connection successful!');
        conn.release(); // Release the connection back to the pool
      })
      .catch(err => {
        console.error(err);
      });

module.exports = connection

