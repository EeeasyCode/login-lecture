const mysql = require("mysql");

const db = mysql.createConnection({
    host: "easy-db.c3n8xsaximf8.ap-northeast-2.rds.amazonaws.com",
    user: "admin",
    password: "dlckdals12",
    database: "login_lecture",
});

db.connect();

module.exports = db;
