import axios from "axios";

export const actionTypes = {
  SIGNUP_SUCCESSFULL: "SIGNUP_SUCCESSFULL",
  LOGIN_SUCCESSFULL: "LOGIN_SUCCESSFULL",
};

export const userSignup = (payload = (dispatch) => {
  axios
    .post("http://localhost:8080/auth/signup", payload)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    })
    .catch((er) => {
      console.log(er);
    });
});
