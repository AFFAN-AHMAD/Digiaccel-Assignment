const { Schema, model } = require("mongoose");
const userModel = require("./User.model");

const quizSchema = new Schema({
  quest: { type: Array, required: true },
  type: { type: String, enum: ["onlyOneCorrect", "moreThanOneCorrect"] },
});
const QuizModel = model("quiz", quizSchema);
module.exports = QuizModel;
