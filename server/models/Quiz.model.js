const { Schema, model } = require("mongoose");
const userModel = require("./User.model");

const quizSchema = new Schema({
  quest: { type: Array, required: true },
});
const QuizModel = model("quiz", quizSchema);
module.exports = QuizModel;
