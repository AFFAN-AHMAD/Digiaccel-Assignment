import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router";
import {
  removeSignupMessage,
  userLogin,
  verifyRole,
} from "../../redux/user/action";
import styles from "./login.module.css";
const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  const { token, role, loginMessage } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(removeSignupMessage());
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      return alert("all feilds required");
    }
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

  useEffect(() => {
    if (loginMessage == "Account Verified") {
      alert(loginMessage);
      setTimeout(() => {
        console.log("rol in timeOut", role);
      
      }, 100);
    } else if (loginMessage == "Wrong Password") {
      return alert(loginMessage);
    } else if (loginMessage == "Invalid email") {
      return alert(loginMessage);
    } else if (loginMessage == "Internal Server Error") {
      return alert(loginMessage);
    }
  }, [loginMessage]);

  // console.log("role", role);

  useEffect(() => {
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
          <button
            className={styles.input}
            type="submit"
            style={{
              // height: "40px",
              padding: "10px",
              fontSize: "20px",
              borderRadius: "10%",
              paddingBottom:"30px",
              border:"1px solid white"
            }}
          >
            Login
          </button>
          <p>
            dont have an account?{" "}
            <span onClick={() => navigate("/")} style={{ color: "whitesmoke" }}>
              create one!!
            </span>{" "}
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
