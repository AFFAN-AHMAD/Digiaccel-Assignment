const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
require("dotenv/config");
const UserModel = require("../models/User.model");

const login = (req, res) => {
  try {
    const { email, password } = req.body;
    console.log("email", email);
    //  check for all the required fields
    if (!email || !password) {
      return res.status(422).send("All fields required");
    }
    // finding the user in the database
    UserModel
      .findOne({ email })
      .then(  async (validation) => {
        console.log("validation", validation);

        // comparing the entered password and the password stored at the time of signing up
        const passwordVerification = await bcrypt.compare(
          password, //password from the request
          validation.password //password from the database
        );
        console.log("passwordVerification", passwordVerification);

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
            process.env.SECRET,
            { expiresIn: "1h" }
          );

          // response to be sent
          console.log("token", token);
          return res.status(200).send({ token, message: "Account Verified" });
        } else {
          return res.status(422).send({ message: "Verification Failed" });
        }
      })
      .catch((err) => res.send(err));
  } catch (err) {
    res.send(err);
  }
};

module.exports = login;
