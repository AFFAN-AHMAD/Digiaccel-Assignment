import React, { useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import styles from "./quiz.module.css";

const Quiz = () => {
  const [typeOfQuiz, setTypeOfQuiz] = useState("type1");
  const { token } = useSelector((state) => state.user);
  const createQuiz = (e) => {
    e.preventDefault();
    if (token) {
      axios
        .post("http://localhost:8080/auth/createQuiz", typeOfQuiz, {
          headers: {
            token: token,
          },
        })
        .then((res) => {
          console.log(res.data);
          // setQuestions(res.data);
        })

        .catch((err) => console.log(err));
    } else {
      console.log("token required");
    }
  };
  return (
    <div className={styles.quizContainer}>
      <h1>Generate a quiz</h1>
      <div>
        <form onSubmit={(e) => createQuiz(e)}>
          <label>Type of Quiz</label>
          <select onChange={(e) => setTypeOfQuiz(e.target.value)}>
            <option value="type1">Only One Answer Correct</option>
            <option value="type2">More Than One Answer Correct</option>
          </select>
          <input type="submit" />
        </form>
      </div>

      {/* {questions && (
        <>
          <h1>show questions</h1>
          {questions.map((ele) => {
            <>
              <p>{ele.question}</p>
              <p>{ele.allAnswers}</p>
            </>;
          })}
        </>
      )} */}
    </div>
  );
};

export default Quiz;
