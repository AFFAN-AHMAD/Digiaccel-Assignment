

const initState = {
  name: "",
  email: "",
  password: "",
  role: "",
};

const userReducer = (state = initState, { payload, type }) => {
  switch (type) {
    case "SIGNUP_SUCCESSFULL":
      return {
        ...state,
        payload,
      };
    default:
      return state;
  }
};
export default userReducer;
