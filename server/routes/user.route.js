const { Router } = require("express");
const userRoute = Router();


const signup = require("../controllers/signup");
const login = require("../controllers/login");
const protect = require("../middlewares/protect");

userRoute.post("/signup", signup);
userRoute.post("/login", login);


userRoute.get("/createQuiz", protect, createQuiz);

module.exports = userRoute;
