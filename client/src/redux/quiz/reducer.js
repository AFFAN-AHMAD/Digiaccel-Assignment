const init = {
  oneCorrect: [],
  twoCorrect: [],
  score: [],
  noOfQuestions: 0,
  quizes: [],
  isError: false,
  isSuccess: false,
  message: "",
  currentTest: "",
  currentTestId: "",
  currentTestSuccess: false,
};

const quizReducer = (state = init, { type, payload }) => {
  switch (type) {
    case "ADD_ONE_ANSWER_CORRECT":
      return {
        ...state,
        oneCorrect: [...state.oneCorrect, payload],
      };
    case "ADD_TWO_ANSWERS_CORRECT":
      return {
        ...state,
        twoCorrect: [...state.twoCorrect, payload],
      };

    case "GENERATE_QUIZ_SUCCESS":
      return {
        ...state,
        isError: false,
        isSuccess: true,
        message: payload.message,
      };
    case "GENERATE_QUIZ_FAILED":
      return {
        ...state,
        isSuccess: false,
        isError: true,
        message: payload,
      };
    case "SET_INITIAL":
      return {
        ...state,
        ...payload,
      };

    case "GET_CURRENT_TEST_SUCCESS":
      return {
        ...state,
        currentTest: payload.test,
        currentTestId: payload._id,
        currentTestSuccess: true,
      };
    case "GET_CURRENT_TEST_FAILURE":
      return {
        ...state,
        currentTestSuccess: false,
      };
    case "SET_SCORE":
      return {
        ...state,
        score: [...payload.scores],
        noOfQuestions: payload.noOfQuestions,
      };

    default:
      return state;
  }
};

export default quizReducer;
