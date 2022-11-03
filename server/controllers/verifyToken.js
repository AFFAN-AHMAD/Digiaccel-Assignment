const jwt = require("jsonwebtoken");

const verifyToken = (token) => {
  const decode = jwt.verify(token, process.env.SECRET);
  return decode;
};

module.exports = verifyToken;
