const init = {
  oneCorrect: [],
  twoCorrect: [],
  history: [],
  quizes: [],
  isError: false,
  isSuccess: false,
  message: "",
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
    default:
      return state;
  }
};

export default quizReducer;
