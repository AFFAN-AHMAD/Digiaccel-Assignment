const { Router } = require("express");
const userRoute = Router();

const signup = require("../controllers/signup");
const login = require("../controllers/login");
const protect = require("../middlewares/protect");
const createQuiz = require("../controllers/createQuiz");
const verifyUserRole = require("../controllers/verifyUserRole");
const addQuestion = require("../controllers/addQuestion")
userRoute.post("/signup", signup);
userRoute.post("/login", login);

userRoute.get("/verifyUserRole", protect, verifyUserRole);

userRoute.get("/createQuiz", protect, createQuiz);
userRoute.get("/addQuestion", protect, addQuestion);

module.exports = userRoute;
