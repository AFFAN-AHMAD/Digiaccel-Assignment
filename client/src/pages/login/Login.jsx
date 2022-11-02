import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userLogin } from "../../redux/user/action";
const Login = () => {
  const dispatch = useDispatch();

  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  const { token } = useSelector((state) => state.user);
  const handleSubmit = (e) => {
    e.preventDefault();
    const person = {
      email,
      password,
    };
    dispatch(userLogin(person));
  };

  useEffect(()=>{
      localStorage.setItem("token", JSON.stringify(token));
      console.log("token received", token);
  },[token])

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="text"
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <input type="submit" />
      </form>
    </>
  );
};

export default Login;
