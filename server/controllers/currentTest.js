const QuizModel = require("../models/QuizType1.model");

const currentTest = async (req, res) => {
  try {
    let { id } = req.headers;
    console.log(id);
    let test = await QuizModel.findOne({ _id: id });
    console.log("test", test);
    return res.send(test);
  } catch (err) {
    return res.send(err);
  } finally {
    return;
  }
};

module.exports = currentTest;
