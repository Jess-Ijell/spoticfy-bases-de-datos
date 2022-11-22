const mysql = require("mysql2");

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "rootroot",
    database: "spoticfy",
});

connection.connect((err) => {
    if (err) {
        console.error("Error conectándose: " + err);
        return;
    }
});

module.exports = connection;