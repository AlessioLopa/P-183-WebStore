import express from "express";
import connection from "../mysql/MySql.js";
import compareHashPassword from "../auth/crypto.js";
import jwt from "jsonwebtoken";
import privateKey from "../auth/private_key.js";

const loginRouter = express.Router();

loginRouter.post("/", (req, res) => {
  connection.query(
    `SELECT * FROM t_user WHERE username="${req.body.username}"`,
    (error, user) => {
      const hashedPassword = user[0].password;
      const password = req.body.password;

      const result = compareHashPassword(password, hashedPassword);
      if (result) {
        const token = jwt.sign({ userId: user[0].id }, privateKey, {
          expiresIn: "1y",
        });
        const message = "L'utilisateur a été connecté avec succès";
        return res.json({ message, data: token });
      } else {
        const message = "Le mot de passe est incorrects.";
        return res.status(401).json({ message });
      }
    }
  );
});

export default loginRouter;
