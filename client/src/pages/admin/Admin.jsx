import React, { useState } from "react";
import OneAnswer from "../../components/oneAnswer/OneAnswer";
import styles from "./admin.module.css";
const Admin = () => {
  const [typeOfQuest, setTypeOfQuest] = useState("type1");
  return (
    <div className={styles.container}>
      <div>
        <h1>Add a question</h1>
        <select>
          <option value="type1">only one answer correct</option>
          <option value="type2">more than one answer correct</option>
        </select>
        <OneAnswer/>

      </div>
      <div>
        <h1>Create a quiz</h1>
      </div>
    </div>
  );
};

export default Admin;
