/* const mysql = require("mysql2");
 */ import mysql from "mysql2";

// Crée une nouvelle connexion à la base de données
const connection = mysql.createConnection({
  host: "localhost",
  port: "6033",
  user: "root",
  password: "root",
  database: "db_WebStore",
});

export default connection;
