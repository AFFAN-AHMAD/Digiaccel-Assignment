import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import OneAnswer from "../oneAnswer/OneAnswer";
import TwoAnswers from "../twoAnswers/TwoAnswers";
import styles from "../admin.module.css";
const Question = () => {
  const [typeOfQuest, setTypeOfQuest] = useState("type1");
  return (
    <div>
      <div className={styles.questContainer}>
        <h1>Add a question</h1>
        <select
          className={styles.select}
          onChange={(e) => setTypeOfQuest(e.target.value)}
        >
          <option value="type1">only one answer correct</option>
          <option value="type2">more than one answer correct</option>
        </select>
        {typeOfQuest == "type1" ? <OneAnswer /> : <TwoAnswers />}
      </div>
    </div>
  );
};

export default Question;
