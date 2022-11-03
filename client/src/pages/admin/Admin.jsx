import React, { useState } from "react";
import OneAnswer from "../../components/oneAnswer/OneAnswer";
import TwoAnswers from "../../components/twoAnswers/TwoAnswers";
import styles from "./admin.module.css";
const Admin = () => {
  const [typeOfQuest, setTypeOfQuest] = useState("type1");
  return (
    <div className={styles.container}>
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
      <div>
        <h1>Create a quiz</h1>
      </div>
    </div>
  );
};

export default Admin;
