import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router";
import { userLogin, verifyRole } from "../../redux/user/action";
const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  const { token, role } = useSelector((state) => state.user);
  const handleSubmit = (e) => {
    e.preventDefault();
    const person = {
      email,
      password,
    };
    dispatch(userLogin(person));
  };

  useEffect(() => {
    if (token) {
      try {
        localStorage.setItem("token", JSON.stringify(token));
        console.log("token received", token);
        dispatch(verifyRole(token));
      } catch (err) {
        console.log(err);
      }
    }
  }, [token]);
  // console.log("role", role);

  useEffect(() => {
    console.log("role in login", role);
    if (role && role == "user") {
      navigate("/user");
    } else if (role && role == "admin") {
      navigate("/admin");
    }
  }, [role]);
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
