const TwoOrMoreModel = require("../models/TwoOrMore.model");

const twoOrMoreCorrect = async (rec, res) => {
  try {
    let { question, correctAnswer, allAnswers } = req.body;
    let quest = await TwoOrMoreModel({
      question,
      allAnswers,
      correctAnswer,
    });
    quest.save();
    return res.status(200).send("question is created sucessfully");
  } catch (err) {
    return res.send(err);
  }
};

module.exports = twoOrMoreCorrect;
