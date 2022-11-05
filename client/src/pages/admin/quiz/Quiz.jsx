import React, { useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import styles from "./quiz.module.css";

const Quiz = () => {
  const [typeOfQuiz, setTypeOfQuiz] = useState("type1");
  const { token } = useSelector((state) => state.user);
  const createQuiz = (e) => {
    console.log("sub");
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
      <div style={{ display: "flex", justifyContent: "center" }}>
        <form onSubmit={(e) => createQuiz(e)}>
          <label style={{ fontSize: "20px" }}>Type of Quiz</label>
          <select
            onChange={(e) => setTypeOfQuiz(e.target.value)}
            style={{ display: "block", margin: "20px" }}
          >
            <option value="type1">Only One Answer Correct</option>
            <option value="type2">More Than One Answer Correct</option>
          </select>
          <button type="submit">Generate</button>
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
