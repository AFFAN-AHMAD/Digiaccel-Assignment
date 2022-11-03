const { Schema, model } = require("mongoose");

const oneAnswerSchema = new Schema({
  question: { type: String, required: true },
  correctAnswer: { type: String, required: true },
  inCorrectAnswers: { type: Array, required: true },
  allAnswers: { type: Array, required: true },
});

const OneAnswerModel = model("MCQType1", oneAnswerSchema);

module.exports = oneAnswerSchema;
