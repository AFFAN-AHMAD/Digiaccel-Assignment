const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const cors = require("cors");
const app = express();
const userRoute = require("./routes/user.route");

const connection = require("./config/config");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.get("/", "connected");

app.use(cors());
app.use("/auth", userRoute);

app.listen(8080, async () => {
  try {
    await connection;
    console.log("server is running on http://localhost:8080");
  } catch (err) {
    console.log(err);
  }
});
