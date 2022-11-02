const jwt = require("jsonwebtoken");

const verifyToken = (token) => {
  const decode = jwt.verify(token, process.env.JWT_SECRET_KEY);
  return decode;
};


module.exports = verifyToken