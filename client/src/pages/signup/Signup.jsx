import axios from "axios";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userSignup } from "../../redux/user/action";
import styles from "./signup.module.css";
const Signup = () => {
  const dispatch = useDispatch();

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
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <div className={styles.inputContainers}>
          <label>Name</label>
          <input type="text" onChange={(e) => setName(e.target.value)} />
        </div>
        <div className={styles.inputContainers}>
          <label>Email</label>
          <input type="text" onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className={styles.inputContainers}>
          <label>Password</label>
          <input type="text" onChange={(e) => setPassword(e.target.value)} />
        </div>

        <div className={styles.inputContainers}>
          <label>Role</label>
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
        <div className={styles.inputContainers} style={{ border: 'none' }}>
          {/* <label></label> */}
          <input type="submit" />
        </div>
      </form>
    </div>
  );
};

export default Signup;
