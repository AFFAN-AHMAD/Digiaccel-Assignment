const OneAnswerModel = require("../models/OneCorrectAnswer.model");
const TwoOrMoreModel = require("../models/TwoOrMore.model");

async function generateQuiz(type) {
  let stack = [];
  let level = 1;
  let model;
  if ((type = "type1")) {
    model = OneAnswerModel;
  } else {
    model = TwoOrMoreModel;
  }
  for (let i = 0; i < 10; i++) {
    let arrayOfQuest = await model.find({ difficulty: { $eq: level } });
    level++;
    let random = Math.floor(Math.random()*(arrayOfQuest.length-0)+0)
    stack.push(arrayOfQuest[random])
  }
  console.log(stack)
  return stack
}

 const createQuiz = async (req, res) => {
  try {
    let { type } = req.body;
    let quiz =await generateQuiz(type);
    return res.send(quiz)
  } catch (err) {
    return res.send(err);
  }
};
module.exports = createQuiz