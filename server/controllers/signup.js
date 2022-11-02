const bcrypt = require("bcryptjs");
require("dotenv/config");
const userModel = require("../models/User.model");

const signup = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;

    //   check for all the fields are entered
    if (!name || !email || !password) {
      return res.status(422).send("All fields are required");
    }

    //   check! if user already exist with that email address
    userModel.findOne({ email }).then(async (savedUser) => {
      if (savedUser) {
        return res.status(422).send({ message: "User already exists" });
      }
    });

    //  password hashing
    const hashedpassword = await bcrypt.hash(password, 12);

    //   creating user object
    const user = await userModel.create({
      email,
      name,
      password: hashedpassword,
      role,
    });

    res.status(200).send({ message: "User saved successfully" });
  } catch (err) {
    res.send(err);
  }
};

module.exports = signup;
