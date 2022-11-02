const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
require("dotenv/config");
const userModel = require("../models/User.model");

const login =  (req, res) => {
  try {
    const { name, email, password } = req.body;
    //  check for all the required fields
    if (!email || !password) {
      return res.status(422).send("All fields required");
    }
    // finding the user in the database
    userModel
      .findOne({ email })
      .then(async (validation) => {
        // comparing the entered password and the password stored at the time of signing up

        console.log("validation", validation);

        const passwordVerification = await bcrypt.compare(
          password, //password from the request
          validation.password //password from the database
        );

        //   if the above check is true
        if (passwordVerification) {
          // creating jwt token
          const token = jwt.sign(
            {
              id: validation._id,
              email: validation.email,
              name: validation.name,
              role: validation.role,
            },
            SECRET,
            { expiresIn: "1h" }
          );

          // response to be sent
          const ResponseToFrontEnd = token;
          return res
            .status(200)
            .json({ ResponseToFrontEnd, message: "Account Verified" });
        } else {
          return res.status(422).json({ message: "Verification Failed" });
        }
      })
      .catch((err) => res.send(err));
  } catch (err) {
    res.send(err);
  }
};

module.exports = login;
