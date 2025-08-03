const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',          // change if you use a different user
    password: 'Ganesh@20367',          // put your MySQL password if you have one
    database: 'user_form', //database name
    port: 3306
});

connection.connect(err => {
    if (err) {
        console.error('MySQL connection failed:', err);
        return;
    }
    console.log('Connected to MySQL');
});

module.exports = connection;
