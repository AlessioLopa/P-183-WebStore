const express = require("express");
const https = require("node:https");
const fs = require("node:fs");

const options = {
  key: fs.readFileSync("./certificates/key.key"),
  cert: fs.readFileSync("./certificates/cert.cert"),
};

const app = express();
const userRoute = require("./routes/User");
app.use("/user", userRoute);

// Démarrage du serveur
https
  .createServer(options, (req, res) => {
    res.writeHead(200);
    res.end("hello world\n");
  })
  .listen(8080);
