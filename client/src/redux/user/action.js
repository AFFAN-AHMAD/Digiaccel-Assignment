import axios from "axios";

export const actionTypes = {
  SIGNUP_SUCCESSFULL: "SIGNUP_SUCCESSFULL",
  LOGIN_SUCCESSFULL: "LOGIN_SUCCESSFULL",
};

export const userSignup = (payload = (dispatch) => {
  axios
    .post("http://localhost:8080/auth/signup", payload)
    .then((res) => dispatch({ type: actionTypes.LOGIN_SUCCESSFULL, payload }))
    .catch((er) => {
      console.log(err,"signup failed");
    });
});
