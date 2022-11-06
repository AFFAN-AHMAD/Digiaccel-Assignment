const { Schema, model } = require("mongoose");
const userModel = require("./User.model");

const quizSchema = new Schema({
  test: { type: Array, required: true },
});
const QuizModel = model("quiz", quizSchema);
module.exports = QuizModel;
