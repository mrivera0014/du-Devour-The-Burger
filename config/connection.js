const mysql = require('mysql');

//connecting to mysql
const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'Canelo!14',
    database: 'burgers_db'
})

//make connection
connection.connect((err) => {
    if (err) {
        console.error(`Error Connecting: ${err.stack}`);
        return;
    }
    console.log(`Connected as ID: ${connection.threadId}`)
})

module.exports = connection