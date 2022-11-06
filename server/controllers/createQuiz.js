const OneAnswerModel = require("../models/OneCorrectAnswer.model");
const QuizModel = require("../models/QuizType1.model");
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
    if (arrayOfQuest[0] == undefined) {
      return { status: false, difficulty: level };
    }
    // console.log("array if quest", arrayOfQuest);
    level++;
    let random = Math.floor(Math.random() * (arrayOfQuest.length - 0) + 0);
    stack.push(arrayOfQuest[random]);
  }
  console.log(stack);
  return { status: true, quiz: stack };
}

const createQuiz = async (req, res) => {
  try {
    let { type } = req.body;
    let quiz = await generateQuiz(type);
    console.log("quiz", quiz);
    if (quiz.status == false) {
      return res.status(404).send({
        message: `no question available for difficulty level ${quiz.difficulty}`,
      });
    } else {
      let tests = await QuizModel.create({
        test: quiz.quiz,
      });
      return res
        .status(200)
        .send({ tests, message: "quiz generated succesfully!!" });
    }
  } catch (err) {
    return res.status(500).send({ message: "Internal server error" });
  } finally {
    return;
  }
};
module.exports = createQuiz;
