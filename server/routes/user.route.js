const { Router } = require("express");
const userRoute = Router();

const signup = require("../controllers/signup");
const login = require("../controllers/login");
const protect = require("../middlewares/protect");
const createQuiz = require("../controllers/createQuiz");
const verifyUserRole = require("../controllers/verifyUserRole");
const addQuestion = require("../controllers/addQuestion");
const twoOrMoreCorrect = require("../controllers/twoOrMoreCorrect");

userRoute.post("/signup", signup);
userRoute.post("/login", login);

// for verifying the role of the person logged in
userRoute.get("/verifyUserRole", protect, verifyUserRole);

// for creating a quiz
userRoute.get("/createQuiz", protect, createQuiz);

// for adding a question having only one answer correct
userRoute.get("/addQuestion", protect, addQuestion);

// for adding a question having more than one answer correct
userRoute.get("/twoOrMore", protect, twoOrMoreCorrect);

module.exports = userRoute;
