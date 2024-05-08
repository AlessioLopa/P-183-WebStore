import crypto from "crypto";

const hashPassword = (password) => {
  return crypto.createHash("sha256").update(password).digest("hex");
};

const compareHashPassword = (password, hashedPassword) => {
  if (hashPassword(password) === hashedPassword) {
    return true;
  }
  return false;
};

export default compareHashPassword;
