const mysql = require("mysql2");

const conn = mysql.createConnection({
    host: "localhost",
    user: "rrot",
    password: "rootroot",
    database: "spoticfy",
});

connection.connect((err) => {
    if (err) {
        console.error("Error conectándose: " + err);
        return;
    }

    module.exports = conn;
});