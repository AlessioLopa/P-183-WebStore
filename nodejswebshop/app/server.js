const express = require("express");
const https = require("node:https");
const fs = require("node:fs");
const mysql = require("mysql2");

const options = {
  key: fs.readFileSync("./certificates/key.key"),
  cert: fs.readFileSync("./certificates/cert.cert"),
};

// create a new MySQL connection
const connection = mysql.createConnection({
  host: "172.0.0.2",
  port: "3306",
  user: "db_user",
  password: "db_user_pass",
  database: "db_WebStore",
});
// connect to the MySQL database
connection.connect((error) => {
  if (error) {
    console.error("Error connecting to MySQL database:", error);
  } else {
    console.log("Connected to MySQL database!");
  }
});
// close the MySQL connection
connection.end();

// Démarrage du serveur
https
  .createServer(options, (req, res) => {
    res.writeHead(200);
    res.end("hello world\n");
  })
  .listen(8080);

const app = express();
const userRoute = require("./routes/User");
app.use("/user", userRoute);
