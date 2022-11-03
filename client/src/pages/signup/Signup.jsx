import axios from "axios";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { userSignup } from "../../redux/user/action";
import styles from "./signup.module.css";
const Signup = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [role, setRole] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const person = {
      name,
      email,
      password,
      role,
    };
    dispatch(userSignup(person));
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.h1}>Sign Up</h1>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.inputContainers}>
          <label className={styles.label}>Name</label>
          <input
            className={styles.input}
            type="text"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
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
        </div>

        <div className={styles.inputContainers}>
          <label className={styles.label}>Role</label>
          <select
            onChange={(e) => {
              setRole(e.target.value);
              console.log(e.target.value);
            }}
          >
            <option>select role</option>
            <option value={"admin"}>Admin</option>
            <option value={"user"}>User</option>
          </select>
        </div>
        <div className={styles.inputContainers} style={{ border: "none" }}>
          {/* <label></label> */}
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
            already have an account?{" "}
            <span onClick={() => navigate("/login")} style={{ color: "blue" }}>
              move to login
            </span>{" "}
          </p>
        </div>
      </form>
    </div>
  );
};

export default Signup;
