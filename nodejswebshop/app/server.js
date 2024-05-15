import express from "express";
import https from "node:https";
import fs from "node:fs";
import connection from "./mysql/MySql.js";

// Instancie express
const app = express();

// Permet d'afficher du json
app.use(express.json());

// Connection avec la base de données
connection.connect((error) => {
  if (error) {
    console.error("Error connecting to MySQL database:", error);
  } else {
    console.log("Connected to MySQL database!");
  }
});

// Options qui appelent le certificat ssl
const options = {
  key: fs.readFileSync("./certificates/key.key"),
  cert: fs.readFileSync("./certificates/cert.cert"),
};

// Démarrage du serveur avec le certificat ssl
https.createServer(options, app).listen(8080);

// Route qui permet de vooir les users
import userRouter from "./routes/User.js";
app.use("/user", userRouter);

import loginRouter from "./routes/login.js";
app.use("/login", loginRouter);

// Home
/* app.use("/", (req, res) => {
  res.end("Hello World");
}); */
