import React, { useRef } from "react";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styles from "./myTest.module.css";
import { getCurrent, setScore } from "../../../redux/quiz/action";
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
  const [noOfQuestions, setNoOfQuestions] = useState(0);
  const { currentTest, currentTestId, currentTestSuccess } = useSelector(
    (state) => state.quiz
  );
  const navigate = useNavigate();
  useEffect(() => {
    if (!token) {
      token = myToken;
    }
    if (!token) {
      navigate("/login");
    }
  }, [token]);


  useEffect(() => {
    console.log("id in useEffect", id);
    dispatch(getCurrent({ id, token }));
  }, []);

  useEffect(() => {
    console.log("scores in effect", scores);
    console.log("noOfQuestions in effect", noOfQuestions);
  }, [{scores,noOfQuestions}]);

  

  useEffect(() => {
    setThisTest([...currentTest]);
  }, [currentTest]);

  useEffect(() => {
    if (end) {
      console.log("end of game", scores);
        dispatch(setScore({scores,noOfQuestions}));

    }
  }, [end]);

  const handleStart = () => {
    setEnd(false);
    setDifficulty(5);
    setTotal(0);
    setScores([]);
    setNoOfQuestions(0);
    thisTest.map((ele) => {
      if (ele.difficulty == 5) {
        return setCurrentQuestion(ele);
      }
    });

    setStart(true);
    console.log("currentQuestion", currentQuestion);
  };

  //   useEffect(() => {
  //     // handleStart();
  //   }, [difficulty]);
  const handleChange = () => {
    thisTest.map((ele) => {
      if (ele.difficulty == difficulty) {
        return setCurrentQuestion(ele);
      }
    });
  };

  const handleCheck = (answer) => {
    if (answer == currentQuestion.correctAnswer) {
      if (difficulty == 10) {
        setTotal((total) => total + 5);
        let curr = scores[scores.length - 1] + 5;
        setScores([...scores, total]);
        setEnd(true);
        return alert(
          "quiz ended, you correctly answered question of diffculty level 10"
        );
      }
      setDifficulty((diff) => diff + 1);
      setTotal((total) => total + 5);
      let curr = scores[scores.length - 1] + 5;
      setScores([...scores, total]);
      handleChange();
    } else {
      if (difficulty == 1) {
        setTotal((total) => total - 2);
        let curr = scores[scores.length - 1] - 2;
        setScores([...scores, total]);
        setEnd(true);
        return alert(
          "quiz ended,you answered the question of difficulty level 1 wrongly"
        );
      }
      setDifficulty((diff) => diff - 1);
      setTotal((total) => total - 2);
      let curr = scores[scores.length - 1] - 2;
      setScores([...scores, total]);
      handleChange();
    }
    setNoOfQuestions((q) => q + 1);

    console.log("scores", scores);
    console.log("noOfQuestions", noOfQuestions);
  };
  return (
    <div style={{ textAlign: "center" }}>
      {start == true && end == false ? (
        <div>
          <div style={{ display: "flex", justifyContent: "space-around" }}>
            <h1>Total Score: {total}</h1>
            <h1>Difficulty: {difficulty}</h1>
            {/* <h1>Score table :{scores}</h1> */}
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
        <button onClick={() => handleStart()} style={{ margin: "auto" }}>
          Start
        </button>
      )}
    </div>
  );
};

export default MyTest;
