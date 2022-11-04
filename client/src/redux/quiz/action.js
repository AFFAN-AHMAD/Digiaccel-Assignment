import axios from "axios";

export const actionTypes = {
  ADD_ONE_ANSWER_CORRECT: "ADD_ONE_ANSWER_CORRECT",
  ADD_TWO_ANSWERS_CORRECT: "ADD_TWO_ANSWERS_CORRECT",
  CREATE_ONE_ANSWER_CORRECT_MCQ: "CREATE_ONE_ANSWER_CORRECT_MCQ",
  CREATE_TWO_ANSWER_CORRECT_MCQ: "CREATE_TWO_ANSWER_CORRECT_MCQ",
};

export const addOneCorrect =
  ({ quest, token }) =>
  (dispatch) => {
    console.log("token in addOneCorrect Action", token);
    axios
      .post("https://digiassignment.herokuapp.com/auth/addQuestion", quest, {
        headers: {
          token: token,
        },
      })
      .then((res) => {
        console.log("data in action in quiz", res.data);
        dispatch({
          type: actionTypes.ADD_ONE_ANSWER_CORRECT,
          payload: res.data,
        });
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
      .post("https://digiassignment.herokuapp.com/auth/twoOrMore", quest, {
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
