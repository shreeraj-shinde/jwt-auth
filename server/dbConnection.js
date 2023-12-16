const mysql = require("mysql2");
const dotenv = require("dotenv").config();
const connection = mysql.createConnection({
  host: process.env.db_host,
  user: process.env.db_user,
  password: process.env.db_password,
  database: process.env.db_database,
});

connection.connect();

connection.query("show tables", function (error, results, fields) {
  if (error) throw error;
  console.log("The solution is: ", results);
});

module.exports = connection;
