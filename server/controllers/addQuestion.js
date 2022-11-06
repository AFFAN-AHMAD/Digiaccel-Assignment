const OneAnswerModel = require("../models/OneCorrectAnswer.model");

const addQuestion = async (req, res) => {
  try {
    let { question, correctAnswer, allAnswers,difficulty } = req.body;
    console.log("question",question)
    let quest = await OneAnswerModel({
      question,
      allAnswers,
      correctAnswer,
      difficulty
    });
    quest.save();
    return res.status(200).send("question is created sucessfully");
  } catch (err) {
    return res.send(err);
  }
};

module.exports = addQuestion;
