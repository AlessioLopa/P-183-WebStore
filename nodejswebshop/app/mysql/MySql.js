import mysql from "mysql2";

const config = {
  host: "localhost",
  port: 3306,
  database: "db_WebStore",
  user: "root",
  password: "root",
};

const connection = mysql.createConnection(config);

connection.connect(function (err) {
  if (err) throw err;
  console.log("Connected !");
});
