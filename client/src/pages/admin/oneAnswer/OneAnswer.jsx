import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./oneAnswer.module.css";
import { addOneCorrect } from "../../../redux/quiz/action";
const OneAnswer = () => {
  const [question, setQuestion] = useState("");
  const [correctAnswer, setCorrectAnswer] = useState("");
  const [allAnswers, setAllAnswers] = useState([]);
  const [difficulty, setDifficulty] = useState(1);
  const [incorrectAnswer1, setIncorrectAnswer1] = useState("");
  const [incorrectAnswer2, setIncorrectAnswer2] = useState("");
  const [incorrectAnswer3, setIncorrectAnswer3] = useState("");

  const { token } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !question ||
      !incorrectAnswer1 ||
      !incorrectAnswer2 ||
      !incorrectAnswer3 ||
      !correctAnswer
    ) {
      return alert("all feilds are required");
    }
    setAllAnswers(
      correctAnswer,
      incorrectAnswer1,
      incorrectAnswer2,
      incorrectAnswer3
    );
    let quest = {
      question,
      correctAnswer,
      allAnswers,
      difficulty,
    };
    console.log("quest in one quest", quest);
    dispatch(addOneCorrect({ quest, token }));
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
        <div>
          <label>Difficulty</label>
          <select
            onChange={(e) => setDifficulty(e.target.value)}
            className={styles.select}
          >
            <option value={1} className={styles.option}>
              1
            </option>
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
          <button className={styles.button} type="submit" placeholder="Add">
            Add
          </button>
        </div>
      </form>
    </div>
  );
};

export default OneAnswer;
