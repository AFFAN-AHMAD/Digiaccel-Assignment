const initState = {
  name: "",
  email: "",
  password: "",
  role: "",
  token: "",
};

const userReducer = (state = initState, { payload, type }) => {
  switch (type) {
    case "SIGNUP_SUCCESSFULL":
      return {
        ...state,
        ...payload,
      };
    case "LOGIN_SUCCESSFULL":
      console.log("payload in reducer", payload);
      return {
        ...state,
        token: payload.token,
      };

    case "VERIFIED_ROLE_SUCCESSFULL":
      return {
        ...state,
        role: payload.role,
      };
    default:
      return state;
  }
};
export default userReducer;
