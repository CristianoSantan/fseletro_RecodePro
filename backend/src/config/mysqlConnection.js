const mysql = require('mysql');

const mysqlConnection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "fseletro",
  });

  module.exports = mysqlConnection;