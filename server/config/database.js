const mysql = require("mysql2");
require("dotenv").config();

const dbConnect = () => {
  const connection = mysql.createConnection({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
  });

  connection.connect((err) => {
    if (err) {
      console.error("Error connecting to MySQL:", err);
      process.exit(1);
    } else {
      console.log("Connected to MySQL database");
    }
  });

  connection.on("error", (err) => {
    console.error("MySQL connection error:", err);
    process.exit(1);
  });

  return connection;
};

module.exports = dbConnect;