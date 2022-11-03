import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router";
import { userLogin, verifyRole } from "../../redux/user/action";
import styles from "./login.module.css";
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
    <div className={styles.container}>
      <h1 className={styles.h1}>Login</h1>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.inputContainers}>
          <label className={styles.label}>Email</label>
          <input
            className={styles.input}
            type="text"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className={styles.inputContainers}>
          <label className={styles.label}>Password</label>
          <input
            className={styles.input}
            type="text"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>{" "}
        <div className={styles.inputContainers} style={{ border: "none" }}>
          <input
            className={styles.input}
            type="submit"
            style={{
              height: "40px",
              padding: "10px",
              fontSize: "20px",
              borderRadius: "10%",
            }}
          />
          <p>
            dont have an account?{" "}
            <span onClick={() => navigate("/")} style={{ color: "blue" }}>
              create one!!
            </span>{" "}
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
