const mysql = require('mysql');

//connecting to mysql
// const connection = mysql.createConnection({
//     host: 'localhost',
//     port: 3306,
//     user: 'root',
//     password: 'Canelo!14',
//     database: 'burgers_db'
// })

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'Canelo!14',
        database: 'burgers_db'
    })
}

//make connection
connection.connect((err) => {
    if (err) {
        console.error(`Error Connecting: ${err.stack}`);
        return;
    }
    console.log(`Connected as ID: ${connection.threadId}`)
})

module.exports = connection