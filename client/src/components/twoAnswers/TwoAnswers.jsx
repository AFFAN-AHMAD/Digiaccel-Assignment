import React, { useState } from "react";
import styles from "./two.module.css"
const TwoAnswers = () => {
  const [question, setQuestion] = useState("");
  const [correctAnswers, setCorrectAnswers] = useState([]);
  const [correctAnswer1,setCorrectAnswer1] = useState("")
  const [correctAnswer2,setCorrectAnswer2] = useState("")
  const [allAnswers, setAllAnswers] = useState([]);
  const [incorrectAnswer1, setIncorrectAnswer1] = useState("");
  const [incorrectAnswer2, setIncorrectAnswer2] = useState("");
  const [incorrectAnswer3, setIncorrectAnswer3] = useState("");
  return (
    <div className={styles.container}>
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
        <label>correct answers</label>
        <div>
          <label>1</label>{" "}
          <textarea
            onChange={(e) => setCorrectAnswer1(e.target.value)}
          ></textarea>
        </div>
        <div>
          <label>2</label>
          <textarea
            onChange={(e) => setCorrectAnswer2(e.target.value)}
          ></textarea>
        </div>
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

export default TwoAnswers;
