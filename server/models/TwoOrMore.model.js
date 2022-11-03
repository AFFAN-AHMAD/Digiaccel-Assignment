const { Schema, model } = require("mongoose");

const twoOrMoreSchema = new Schema({
  question: { type: String, required: true },
  correctAnswer: { type: Array, required: true },
  allAnswers: { type: Array, required: true },
  difficulty: { type: Number, required: true },
});

const TwoOrMoreModel = model("MCQType2", twoOrMoreSchema);

module.exports = TwoOrMoreModel;
