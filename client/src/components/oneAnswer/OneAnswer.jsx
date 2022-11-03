import React, { useState } from "react";

const OneAnswer = () => {
  const [question, setQuestion] = useState("");
  const [correctAnswer, setCorrectAnswer] = useState("");
  const [allAnswers, setAllAnswers] = useState([]);
  const [incorrectAnswer1, setIncorrectAnswer1] = useState("");
  const [incorrectAnswer2, setIncorrectAnswer2] = useState("");
  const [incorrectAnswer3, setIncorrectAnswer3] = useState("");
  return (
    <div>
      <div>
        <label>Question</label>
        <textarea
          onChange={(e) => {
            console.log(e.target.value);
            setQuestion(e.target.value);
          }}
        ></textarea>
      </div>
      <div>
        <label>correct answer</label>
        <textarea onChange={(e) => setCorrectAnswer(e.target.value)}></textarea>
      </div>
      <div>
        <label>incorrect answers</label>
        <div>
          <label>1</label>
          <textarea
            onChange={(e) => setIncorrectAnswer1(e.target.value)}
          ></textarea>
        </div>
        <div>
          <label>2</label>
          <textarea
            onChange={(e) => setIncorrectAnswer2(e.target.value)}
          ></textarea>{" "}
        </div>
        <div>
          <label>3</label>
          <textarea
            onChange={(e) => setIncorrectAnswer3(e.target.value)}
          ></textarea>{" "}
        </div>
      </div>
    </div>
  );
};

export default OneAnswer;
