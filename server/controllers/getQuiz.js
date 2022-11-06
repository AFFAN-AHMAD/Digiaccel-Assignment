const QuizModel = require("../models/QuizType1.model");

const getQuiz = async (req, res) => {
  try {
    let data = await QuizModel.find({});
    return res.send(data);
  } catch (err) {
    console.log(err);
  } finally {
    return;
  }
};

module.exports = getQuiz;
