import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import styles from "./tests.module.css";
const LiveTests = () => {
  const [test, setTest] = useState([]);
  let { token } = useSelector((state) => state.user);
  const myToken = JSON.parse(localStorage.getItem("token"));
  const navigate = useNavigate();
  useEffect(() => {
    if (!token) {
      token = myToken;
    }
    if (!token) {
      navigate("/login");
    }
  }, [token]);
  function handleClick(id) {
    navigate(`/admin/tests/${id}`);
  }
  useEffect(() => {
    axios
      .get("http://localhost:8080/auth/getQuiz", {
        headers: {
          token: token,
        },
      })
      .then((res) => {
        // console.log(res);
        console.log(res.data);
        setTest(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className={styles.container}>
      {test.map((ele, index) => {
        return (
          <div key={index} className={styles.box}>
            <h1>Test</h1>
            <h1>{index + 1}</h1>
            <button onClick={() => handleClick(ele._id)}>Go to Test</button>
          </div>
        );
      })}
    </div>
  );
};

export default LiveTests;
