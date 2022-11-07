import React, { useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import styles from "./quiz.module.css";
import { generateQuiz, setInit } from "../../../redux/quiz/action";
import { useEffect } from "react";
import { useRef } from "react";
import { useNavigate } from "react-router";
const Quiz = () => {
  const [typeOfQuiz, setTypeOfQuiz] = useState("type1");
  let { token } = useSelector((state) => state.user);
  const { isError, isSuccess, message } = useSelector((state) => state.quiz);
  const myToken = JSON.parse(localStorage.getItem("token"));
  const dispatch = useDispatch();
  const change = useRef();
  change.current = true;
   const navigate = useNavigate();
   useEffect(() => {
     if (!token) {
       token = myToken;
     }
     if (!token) {
       navigate("/login");
     }
   }, [token]);
  const createQuiz = (e) => {
    console.log("token", token);
    e.preventDefault();
    if (token) {
      dispatch(generateQuiz({ typeOfQuiz, token }));
      setTimeout(() => {
        change.current == true
          ? (change.current = false)
          : (change.current = true);
      }, 500);
    } else {
      console.log("token required");
    }
  };
  useEffect(() => {
    if (isSuccess == true) {
      alert(message);
      return dispatch(setInit({ isSuccess: false }));
    } else if (isError == true) {
      alert(message);
      return dispatch(setInit({ isError: false }));
    }
  }, [isError, isSuccess]);

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
    </div>
  );
};

export default Quiz;
