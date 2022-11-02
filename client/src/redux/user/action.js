import axios from "axios";

export const actionTypes = {
  SIGNUP_SUCCESSFULL: "SIGNUP_SUCCESSFULL",
  LOGIN_SUCCESSFULL: "LOGIN_SUCCESSFULL",
};

export const userSignup = (payload) => (dispatch) => {
  console.log("payload", payload);
  axios
    .post("http://localhost:8080/auth/signup", payload)
    .then((res) => {
      console.log(res.data, "data");
      dispatch({ type: actionTypes.SIGNUP_SUCCESSFULL, payload: res.data });
    })
    .catch((er) => {
      console.log(er, "signup failed");
    });
};
