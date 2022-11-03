import React, { useState } from "react";
import styles from "./two.module.css";
const TwoAnswers = () => {
  const [question, setQuestion] = useState("");
  const [correctAnswers, setCorrectAnswers] = useState([]);
  const [correctAnswer1, setCorrectAnswer1] = useState("");
  const [correctAnswer2, setCorrectAnswer2] = useState("");
  const [allAnswers, setAllAnswers] = useState([]);
  const [incorrectAnswer1, setIncorrectAnswer1] = useState("");
  const [incorrectAnswer2, setIncorrectAnswer2] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    
  };
  return (
    <div className={styles.container}>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className={styles.question}>
          <label className={styles.label}>Question</label>
          <textarea
            style={{
              minWidth: "350px",
              minHeight: "50px",
              display: "block",
              margin: "auto",
            }}
            onChange={(e) => {
              console.log(e.target.value);
              setQuestion(e.target.value);
            }}
          ></textarea>
        </div>
        <div>
          <label className={styles.label}>Correct Answers</label>
          <div>
            <label className={styles.label}>1</label>{" "}
            <textarea
              className={styles.textarea}
              onChange={(e) => setCorrectAnswer1(e.target.value)}
            ></textarea>
          </div>
          <div>
            <label className={styles.label}>2</label>
            <textarea
              className={styles.textarea}
              onChange={(e) => setCorrectAnswer2(e.target.value)}
            ></textarea>
          </div>
        </div>
        <div>
          <label className={styles.label}>Incorrect Answers</label>
          <div>
            <label className={styles.label}>1</label>
            <textarea
              className={styles.textarea}
              onChange={(e) => setIncorrectAnswer1(e.target.value)}
            ></textarea>
          </div>
          <div>
            <label className={styles.label}>2</label>
            <textarea
              className={styles.textarea}
              onChange={(e) => setIncorrectAnswer2(e.target.value)}
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

export default TwoAnswers;
