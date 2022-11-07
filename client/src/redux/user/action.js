import axios from "axios";
import { dispatch } from "d3";

export const actionTypes = {
  // signup actions
  SIGNUP_SUCCESSFULL: "SIGNUP_SUCCESSFULL",
  SIGNUP_FAILED: "SIGNUP_FAILED",

  // login actions
  LOGIN_SUCCESSFULL: "LOGIN_SUCCESSFULL",
  LOGIN_FAILED: "LOGIN_FAILED",

  // signOut
  SIGN_OUT: "SIGN_OUT",
  REMOVE_SIGNUP_MESSAGE:"REMOVE_SIGNUP_MESSAGE",

  VERIFIED_ROLE_SUCCESSFULL: "VERIFIED_ROLE_SUCCESSFULL",
};

export const userSignup = (payload) => (dispatch) => {
  console.log("payload", payload);
  axios
    .post("https://digiappassignment.herokuapp.com/auth/signup", payload)
    .then((res) => {
      console.log(res.data, "data");
      dispatch({ type: actionTypes.SIGNUP_SUCCESSFULL, payload: res.data });
    })
    .catch((er) => {
      // console.log(er, "signup failed");
      console.log("message", er.response.data.message);
      dispatch({
        type: actionTypes.SIGNUP_FAILED,
        payload: er.response.data.message,
      });
    });
};

export const userLogin = (payload) => (dispatch) => {
  axios
    .post("https://digiappassignment.herokuapp.com/auth/login", payload)
    .then((res) => {
      // console.log(res);
      dispatch({ type: actionTypes.LOGIN_SUCCESSFULL, payload: res.data });
    })
    .catch((err) => {
      // console.log(err.response.data.message);
      dispatch({
        type: actionTypes.LOGIN_FAILED,
        payload: err.response.data.message,
      });
    });
};

export const verifyRole = (payload) => (dispatch) => {
  console.log("token in verifyRole in action", payload);
  axios
    .get("https://digiappassignment.herokuapp.com/auth/verifyUserRole", {
      headers: {
        token: payload,
      },
    })
    .then((res) => {
      console.log("data in verifyRole in action", res.data);
      dispatch({
        type: actionTypes.VERIFIED_ROLE_SUCCESSFULL,
        payload: res.data,
      });
    })
    .catch((err) => console.log("error in verifyRole", err));
};

export const logOut = () => (dispatch) => {
  console.log("logout")
  dispatch({ type: actionTypes.SIGN_OUT });
};

export const removeSignupMessage = () =>(dispatch)=>{
    dispatch({ type: actionTypes.REMOVE_SIGNUP_MESSAGE });
}