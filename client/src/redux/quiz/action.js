import axios from "axios";
import { dispatch } from "d3";

export const actionTypes = {
  ADD_ONE_ANSWER_CORRECT: "ADD_ONE_ANSWER_CORRECT",
  ADD_TWO_ANSWERS_CORRECT: "ADD_TWO_ANSWERS_CORRECT",

  CREATE_ONE_ANSWER_CORRECT_MCQ: "CREATE_ONE_ANSWER_CORRECT_MCQ",
  CREATE_TWO_ANSWER_CORRECT_MCQ: "CREATE_TWO_ANSWER_CORRECT_MCQ",

  GENERATE_QUIZ_SUCCESS: "GENERATE_QUIZ_SUCCESS",
  GENERATE_QUIZ_FAILED: "GENERATE_QUIZ_FAILED",

  SET_INITIAL: "SET_INITIAL",

  GET_CURRENT_TEST_SUCCESS: "GET_CURRENT_TEST_SUCCESS",
  GET_CURRENT_TEST_FAILURE: "GET_CURRENT_TEST_FAILURE",

  SET_SCORE: "SET_SCORE",
};

export const addOneCorrect =
  ({ quest, token }) =>
  (dispatch) => {
    // console.log("token in addOneCorrect Action", token);
    axios
      .post("https://digiappassignment.herokuapp.com/auth/addQuestion", quest, {
        headers: {
          token: token,
        },
      })
      .then((res) => {
        // console.log("data in action in quiz", res.data);
        dispatch({
          type: actionTypes.ADD_ONE_ANSWER_CORRECT,
          payload: res.data,
        });
        alert("question added succesfully");
      })
      .catch((er) => {
        console.log(er, "could not add the question");
      });
  };

export const addTwoAnswersCorrect =
  ({ quest, token }) =>
  (dispatch) => {
    console.log("token in addTwoAnswersCorrect Action", token);
    axios
      .post("https://digiappassignment.herokuapp.com/auth/twoOrMore", quest, {
        headers: {
          token: token,
        },
      })
      .then((res) => {
        console.log("data in action in quiz", res.data);
        dispatch({
          type: actionTypes.ADD_TWO_ANSWERS_CORRECT,
          payload: res.data,
        });
      })
      .catch((er) => {
        console.log(er, "could not add the question");
      });
  };

export const generateQuiz =
  ({ typeOfQuiz, token }) =>
  (dispatch) => {
    axios
      .post("https://digiappassignment.herokuapp.com/auth/createQuiz", typeOfQuiz, {
        headers: {
          token: token,
        },
      })
      .then((res) => {
        console.log(res.data);
        dispatch({
          type: actionTypes.GENERATE_QUIZ_SUCCESS,
          payload: res.data,
        });
      })

      .catch((err) => {
        console.log(err);
        dispatch({
          type: actionTypes.GENERATE_QUIZ_FAILED,
          payload: err.response.data.message,
        });
      });
  };

export const setInit = (payload) => (dispatch) => {
  dispatch({ type: actionTypes.SET_INITIAL, payload: payload });
};

export const getCurrent =
  ({ id, token }) =>
  (dispatch) => {
    console.log("token in getCurrent", token);
    axios
      .get("https://digiappassignment.herokuapp.com/auth/currentTest", {
        headers: {
          token: token,
          id: id,
        },
      })
      .then((res) => {
        console.log(res);
        dispatch({
          type: actionTypes.GET_CURRENT_TEST_SUCCESS,
          payload: res.data,
        });
      })
      .catch((err) => {
        console.log(err);
        dispatch({
          type: actionTypes.GET_CURRENT_TEST_FAILURE,
          payload: "loading failed",
        });
      });
  };

export const setScore = (payload) => (dispatch) => {
  console.log("payload in action secsocr",payload)
  dispatch({ type: actionTypes.SET_SCORE, payload: payload });
};
