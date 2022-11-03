import React, { useState } from "react";
import styles from "./oneAnswer.module.css";
const OneAnswer = () => {
  const [question, setQuestion] = useState("");
  const [correctAnswer, setCorrectAnswer] = useState("");
  const [allAnswers, setAllAnswers] = useState([]);
  const [incorrectAnswer1, setIncorrectAnswer1] = useState("");
  const [incorrectAnswer2, setIncorrectAnswer2] = useState("");
  const [incorrectAnswer3, setIncorrectAnswer3] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className={styles.container}>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className={styles.question}>
          <label className={styles.label}>Question</label>
          <textarea
            className={styles.textarea}
            onChange={(e) => {
              console.log(e.target.value);
              setQuestion(e.target.value);
            }}
            style={{ minWidth: "350px", minHeight: "50px", marginTop: "4px" }}
          ></textarea>
        </div>
        <div className={styles.inputsContainer}>
          <label className={styles.label}>Correct Answer</label>
          <textarea
            className={styles.textarea}
            onChange={(e) => setCorrectAnswer(e.target.value)}
          ></textarea>
        </div>
        <div className={styles.inputsContainer}>
          <label className={styles.label}>Incorrect Answers</label>
          <div>
            <label className={styles.label}>1</label>
            <textarea
              className={styles.textarea1}
              onChange={(e) => setIncorrectAnswer1(e.target.value)}
            ></textarea>
          </div>
          <div className={styles.inputsContainer}>
            <label className={styles.label}>2</label>
            <textarea
              className={styles.textarea1}
              onChange={(e) => setIncorrectAnswer2(e.target.value)}
            ></textarea>{" "}
          </div>
          <div className={styles.inputsContainer}>
            <label className={styles.label}>3</label>
            <textarea
              className={styles.textarea1}
              onChange={(e) => setIncorrectAnswer3(e.target.value)}
            ></textarea>{" "}
          </div>
        </div>
        <div className={styles.inputsContainer}>
          <input type="submit" />
        </div>
      </form>
    </div>
  );
};

export default OneAnswer;
