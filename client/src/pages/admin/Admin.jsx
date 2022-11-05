import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Quiz from "./quiz/Quiz";
import styles from "./admin.module.css";
import Navbar from "./nav/Nav";
import Question from "./question/Question";
import { Outlet } from "react-router";
const Admin = () => {
  const { token, name } = useSelector((state) => state.user);
  const [questions, setQuestions] = useState([]);

  useEffect(() => {}, [questions]);
  return (
    <>
      <div>
        <h1 style={{ textAlign: "center" }}>ADMIN PANEL</h1>
        <h3 style={{ textAlign: "center" }}>{name}</h3>
      </div>
      <Navbar />
      {/* <Question /> */}
      <div className={styles.container}>
        {/* generate quiz */}
        {/* <Quiz /> */}
        <Outlet/>
      </div>
    </>
  );
};

export default Admin;
