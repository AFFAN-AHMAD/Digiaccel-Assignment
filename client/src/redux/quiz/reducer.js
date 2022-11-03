const init = {
  oneCorrect: [],
  twoCorrect: [],
  history: [],
  quizes: [],
};

const quizReducer = (state = init, { type, payload }) => {
  switch (type) {
    case "ADD_ONE_ANSWER_CORRECT":
      return {
        ...state,
        oneCorrect: [...state.oneCorrect, payload],
      };
    default:
      return state;
  }
};

export default quizReducer;
