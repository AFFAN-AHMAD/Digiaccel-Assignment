import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getCurrent } from "../../../redux/quiz/action";
import styles from "./currentTest.module.css";
const CurrentTest = () => {
  const param = useParams();
  const { id } = param;
  let { token } = useSelector((state) => state.user);
  let myToken = JSON.parse(localStorage.getItem("token"));
  const [thisTest, setThisTest] = useState([]);
  const { currentTest, currentTestId, currentTestSuccess } = useSelector(
    (state) => state.quiz
  );
  if (!token) {
    token = myToken;
  }
  const dispatch = useDispatch();
  useEffect(() => {
    console.log("id in useEffect", id);
    dispatch(getCurrent({ id, token }));
  }, []);

  useEffect(() => {
    setThisTest([...currentTest]);
  }, [currentTest]);
  console.log(id);
  return (
    <div className={styles.container}>
      {/* {id} */}
      <h1>Current Test</h1>
      {thisTest.map((ele, index) => {
        return (
          <div style={{ border: "1px solid white" }}>
            <div
              style={{ display: "flex", justifyContent: "center", gap: "40px" }}
            >
              <p> {index + 1}</p>
              <p> {ele.question}</p>
            </div>
            <div className={styles.answerContainer}>
              {ele.allAnswers.map((ans, i) => {
                return (
                  <p>
                    {" "}
                    <span
                      style={{ marginRight: "10px" }}
                    >{`${i + 1})`}</span>{" "}
                    {ans}
                  </p>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CurrentTest;
