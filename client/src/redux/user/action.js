import axios from "axios";

export const actionTypes = {
  SIGNUP_SUCCESSFULL: "SIGNUP_SUCCESSFULL",
  LOGIN_SUCCESSFULL: "LOGIN_SUCCESSFULL",
  VERIFIED_ROLE_SUCCESSFULL: "VERIFIED_ROLE_SUCCESSFULL",
};

export const userSignup = (payload) => (dispatch) => {
  // console.log("payload", payload);
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

export const userLogin = (payload) => (dispatch) => {
  axios
    .post("http://localhost:8080/auth/login", payload)
    .then((res) => {
      console.log(res);
      dispatch({ type: actionTypes.LOGIN_SUCCESSFULL, payload: res.data });
    })
    .catch((err) => console.log(err));
};

export const verifyRole = (payload) => (dispatch) => {
  console.log("token in verifyRole in action", payload);
  axios
    .get("http://localhost:8080/auth/verifyUserRole", {
      headers: {
        token: payload,
      },
    })
    .then((res) => {
      console.log("data in verifyRole in action",res.data);
      dispatch({
        type: actionTypes.VERIFIED_ROLE_SUCCESSFULL,
        payload: res.data,
      });
    })
    .catch((err) => console.log("error in verifyRole", err));
};
