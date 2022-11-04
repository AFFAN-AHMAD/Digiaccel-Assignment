import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import OneAnswer from "../../components/oneAnswer/OneAnswer";
import TwoAnswers from "../../components/twoAnswers/TwoAnswers";
import styles from "./admin.module.css";
const Admin = () => {
  const [typeOfQuest, setTypeOfQuest] = useState("type1");
  const [typeOfQuiz, setTypeOfQuiz] = useState("type1");
  const { token } = useSelector((state) => state.user);
  const [questions, setQuestions] = useState([]);
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
          setQuestions(res.data);
        })

        .catch((err) => console.log(err));
    } else {
      console.log("token required");
    }
  };
  useEffect(() => {}, [questions]);
  return (
    <>
      <h1 style={{ textAlign: "center" }}>ADMIN PANEL</h1>
      <div className={styles.container}>
        <div className={styles.questContainer}>
          <h1>Add a question</h1>
          <select
            className={styles.select}
            onChange={(e) => setTypeOfQuest(e.target.value)}
          >
            <option value="type1">only one answer correct</option>
            <option value="type2">more than one answer correct</option>
          </select>
          {typeOfQuest == "type1" ? <OneAnswer /> : <TwoAnswers />}
        </div>
        <div className={styles.quizContainer}>
          <h1>Create a quiz</h1>
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

          {questions && (
            <>
              <h1>show questions</h1>
              {questions.map((ele) => {
                <>
                  <p>{ele.question}</p>
                  <p>{ele.allAnswers}</p>
                </>;
              })}
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Admin;
