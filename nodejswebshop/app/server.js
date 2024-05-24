import express from "express";
import https from "node:https";
import fs from "node:fs";
import connection from "./mysql/MySql.js";
import cors from "cors";

// Instancie express
const app = express();

// Permet d'afficher du json
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173", // Assurez-vous que cette URL correspond à l'origine de votre frontend
    methods: ["GET", "POST", "PUT", "DELETE"], // Les méthodes HTTP que vous autorisez
    allowedHeaders: ["Content-Type", "Authorization"], // Les en-têtes que vous autorisez
    credentials: true, // Ceci est nécessaire pour les cookies, les sessions HTTP ou les en-têtes d'authentification
    optionsSuccessStatus: 200, // Pour les navigateurs plus anciens qui ne gèrent pas bien le 204
  })
);
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
https.createServer(options, app).listen(443);

// Route qui permet de vooir les users
import userRouter from "./routes/User.js";
app.use("/user", userRouter);

import loginRouter from "./routes/login.js";
app.use("/login", loginRouter);
