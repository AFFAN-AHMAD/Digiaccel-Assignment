import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styles from "./myTest.module.css";
import { getCurrent } from "../../../redux/quiz/action";
import { useDispatch, useSelector } from "react-redux";

const MyTest = () => {
  const { id } = useParams();
  const [thisTest, setThisTest] = useState([]);
  const dispatch = useDispatch();
  const [difficulty, setDifficulty] = useState(5);
  const [currentQuestion, setCurrentQuestion] = useState({});
  const [start, setStart] = useState(false);
  let { token } = useSelector((state) => state.user);
  let myToken = JSON.parse(localStorage.getItem("token"));
  let [end, setEnd] = useState(false);
  let [scores, setScores] = useState([]);
  let [total, setTotal] = useState(0);
  const { currentTest, currentTestId, currentTestSuccess } = useSelector(
    (state) => state.quiz
  );
  if (!token) {
    token = myToken;
  }
  useEffect(() => {
    console.log("id in useEffect", id);
    dispatch(getCurrent({ id, token }));
  }, []);

  useEffect(() => {
    setThisTest([...currentTest]);
  }, [currentTest]);

  const handleClick = () => {
    thisTest.map((ele) => {
      if (ele.difficulty == difficulty) {
        return setCurrentQuestion(ele);
      }
    });

    setStart(true);
    console.log("currentQuestion", currentQuestion);
  };

  //   useEffect(() => {
  //     // handleClick();
  //   }, [difficulty]);
  const handleChange = ()=>{
    thisTest.map((ele) => {
      if (ele.difficulty == difficulty) {
        return setCurrentQuestion(ele);
      }
    });
  }

  const handleCheck = (answer) => {
    if (answer == currentQuestion.correctAnswer) {
      if (difficulty == 10) {
        setEnd(true);
        return alert(
          "quiz ended, you correctly answered question of diffculty level 10"
        );
      }
      setDifficulty((diff) => diff + 1);
      setTotal((total) => total + 5);
      setScores([...scores, 5]);
      handleChange()
    } else {
      if (difficulty == 1) {
        setEnd(true);
        return alert(
          "quiz ended,you answered the question of difficulty level 1 wrongly"
        );
      }
      setDifficulty((diff) => diff - 1);
      setTotal((total) => total - 2);
      setScores([...scores, -2]);
            handleChange();

    }
  };
  return (
    <div>
      {start == true ? (
        <div>
          <div>
            <h1>Total Score: {total}</h1>
            <h1>Difficulty: {difficulty}</h1>
            <h1>Score table :{scores}</h1>
          </div>
          <h1>{currentQuestion.question}</h1>
          <div>
            <h3 onClick={() => handleCheck(currentQuestion.allAnswers[0])}>
              {currentQuestion.allAnswers[0]}
            </h3>
            <h3 onClick={() => handleCheck(currentQuestion.allAnswers[1])}>
              {currentQuestion.allAnswers[1]}
            </h3>
            <h3 onClick={() => handleCheck(currentQuestion.allAnswers[2])}>
              {currentQuestion.allAnswers[2]}
            </h3>
            <h3 onClick={() => handleCheck(currentQuestion.allAnswers[3])}>
              {currentQuestion.allAnswers[3]}
            </h3>
          </div>
        </div>
      ) : (
        <button onClick={() => handleClick()}>Start</button>
      )}
    </div>
  );
};

export default MyTest;
