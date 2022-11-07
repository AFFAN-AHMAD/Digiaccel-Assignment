import axios from "axios";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { userSignup } from "../../redux/user/action";
import styles from "./signup.module.css";
import { useToast } from "@chakra-ui/react";
import { checkPassword } from "./checkPassword";
import toastr from "toastr";
const Signup = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [role, setRole] = useState("");

  // message after signing up
  const { signupMessage } = useSelector((state) => state.user);

  // toast
  const toast = useToast();
  useEffect(() => {
    if (signupMessage == "User saved successfully") {
      alert(signupMessage);
      navigate("/login");
    } else if (signupMessage == "User already exists") {
      return alert(signupMessage);
    }
  }, [signupMessage]);

  const handleSubmit = (e) => {
    // console.log("submitted");
    e.preventDefault();
    if (!name || !email || !password || !role) {
      return alert("all feilds required !!");
    }
    let res = checkPassword(password);
    if (!res.flag) {
      toast({
        title: res.message,
        status: "warning",
        duration: 9000,
        isClosable: true,
      });
      return alert(res.message);
    }

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
        <div
          className={styles.inputContainers}
          style={{ borderBottom: "none" }}
        >
          <label className={styles.label}>Password</label>
          <input
            className={styles.input}
            type="text"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className={styles.textContainer}>
          {" "}
          <p className={styles.p}>Required atleast 8 chracters consist of </p>
          <p className={styles.p}>
            1 lower case, 1 upper case, 1 numeric value and 1 special character
          </p>
        </div>

        <div className={styles.inputContainers}>
          <label className={styles.label}>Role</label>
          <select
            className={styles.select}
            onChange={(e) => {
              setRole(e.target.value);
              // console.log(e.target.value);
            }}
          >
            <option>select role</option>
            <option value={"admin"}>Admin</option>
            <option value={"user"}>User</option>
          </select>
        </div>
        <div
          className={styles.inputContainers}
          style={{ border: "none", display: "block" }}
        >
          {/* <label></label> */}
          <button
            className={styles.input}
            type="submit"
            style={{
              height: "40px",
              padding: "10px",
              fontSize: "20px",
              borderRadius: "10%",
              cursor: "pointer",
            }}
          >
            Signup
          </button>
          <p>
            already have an account?{" "}
            <span
              onClick={() => navigate("/login")}
              style={{ color: "whitesmoke", cursor: "pointer" }}
            >
              move to login
            </span>{" "}
          </p>
        </div>
      </form>
    </div>
  );
};

export default Signup;
