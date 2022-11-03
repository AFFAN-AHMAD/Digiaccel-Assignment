const TwoOrMoreModel = require("../models/TwoOrMore.model");

const twoOrMoreCorrect = async (req, res) => {
  try {
    let { question, correctAnswer, allAnswers, difficulty } = req.body;
    let quest = await TwoOrMoreModel({
      question,
      allAnswers,
      correctAnswer,
      difficulty,
    });
    quest.save();
    return res.status(200).send("question is created sucessfully");
  } catch (err) {
    return res.send(err);
  }
};

module.exports = twoOrMoreCorrect;
