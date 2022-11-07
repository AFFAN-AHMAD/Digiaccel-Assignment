const initState = {
  name: "",
  email: "",
  password: "",
  role: "",
  token: "",
  signupMessage: "",
  loginMessage: "",
};

const userReducer = (state = initState, { payload, type }) => {
  switch (type) {
    case "SIGNUP_SUCCESSFULL":
      return {
        ...state,
        // ...payload,
        signupMessage: "User saved successfully",
      };
    case "SIGNUP_FAILED":
      console.log("payload in signupo failed", payload);
      return {
        ...state,
        signupMessage: payload,
      };
    case "LOGIN_SUCCESSFULL":
      // console.log("payload in reducer", payload);
      return {
        ...state,
        token: payload.token,
        loginMessage: payload.message,
      };
    case "LOGIN_FAILED":
      // console.log("payload in reducer", payload);
      return {
        ...state,
        loginMessage: payload,
      };

    case "VERIFIED_ROLE_SUCCESSFULL":
      return {
        ...state,
        ...payload,
      };

    case "SIGN_OUT":
      return {
        ...state,
        name: "",
        email: "",
        password: "",
        role: "",
        token: "",
        signupMessage: "",
        loginMessage: "",
      };
    case "REMOVE_SIGNUP_MESSAGE":
      return {
        ...state,
        signupMessage: "",
      };
    default:
      return state;
  }
};
export default userReducer;
