import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTwoAnswersCorrect } from "../../../redux/quiz/action";
import styles from "./two.module.css";
const TwoAnswers = () => {
  const [question, setQuestion] = useState("");
  const [correctAnswer, setCorrectAnswers] = useState([]);
  const [correctAnswer1, setCorrectAnswer1] = useState("");
  const [correctAnswer2, setCorrectAnswer2] = useState("");
  const [allAnswers, setAllAnswers] = useState([]);
  const [difficulty, setDifficulty] = useState(1);
  const [incorrectAnswer1, setIncorrectAnswer1] = useState("");
  const [incorrectAnswer2, setIncorrectAnswer2] = useState("");

  let { token } = useSelector((state) => state.user);
  const localToken = JSON.parse(localStorage.getItem("token"));
  if (!token) {
    token = localToken;
  }
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !question ||
      !correctAnswer1 ||
      !correctAnswer2 ||
      !incorrectAnswer1 ||
      !incorrectAnswer2
    ) {
      return alert("all feilds required");
    }

    setCorrectAnswers([]);
    correctAnswer.push(correctAnswer1);
    correctAnswer.push(correctAnswer2);

    setAllAnswers([]);
    allAnswers.push(correctAnswer1);
    allAnswers.push(correctAnswer2);
    allAnswers.push(incorrectAnswer1);
    allAnswers.push(incorrectAnswer2);
    // console.log(correctAnswer1, correctAnswer2);
    // console.log("a;;l", allAnswers);
    let quest = {
      question,
      correctAnswer,
      allAnswers,
      difficulty,
    };
    // console.log(quest);
    dispatch(addTwoAnswersCorrect({ quest, token }));
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
          <label>Difficulty</label>
          <select
            onChange={(e) => setDifficulty(e.target.value)}
            className={styles.select}
          >
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
            <option value={6}>6</option>
            <option value={7}>7</option>
            <option value={8}>8</option>
            <option value={9}>9</option>
            <option value={10}>10</option>
          </select>
        </div>
        <div>
          <label className={styles.label}>Correct Answers</label>
          <div className={styles.inputsContainer}>
            <label className={styles.label}>1</label>{" "}
            <textarea
              className={styles.textarea}
              onChange={(e) => setCorrectAnswer1(e.target.value)}
            ></textarea>
          </div>
          <div className={styles.inputsContainer}>
            <label className={styles.label}>2</label>
            <textarea
              className={styles.textarea}
              onChange={(e) => setCorrectAnswer2(e.target.value)}
            ></textarea>
          </div>
        </div>
        <div style={{ marginTop: "20px" }}>
          <label className={styles.label}>Incorrect Answers</label>
          <div className={styles.inputsContainer}>
            <label className={styles.label}>1</label>
            <textarea
              className={styles.textarea}
              onChange={(e) => setIncorrectAnswer1(e.target.value)}
            ></textarea>
          </div>
          <div className={styles.inputsContainer}>
            <label className={styles.label}>2</label>
            <textarea
              className={styles.textarea}
              onChange={(e) => setIncorrectAnswer2(e.target.value)}
            ></textarea>{" "}
          </div>
        </div>
        <div className={styles.inputsContainer}>
          <button className={styles.button} type="submit">
            Add
          </button>
        </div>
      </form>
    </div>
  );
};

export default TwoAnswers;
