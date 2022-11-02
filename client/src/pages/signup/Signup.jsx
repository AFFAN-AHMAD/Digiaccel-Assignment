import axios from "axios";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userSignup } from "../../redux/user/action";
const Signup = () => {
  const dispatch = useDispatch();

  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [role, setRole] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault()
    const person = {
      name,
      email,
      password,
      role,
    };
    dispatch(userSignup(person));
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="name"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="text"
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <select
          onChange={(e) => {
            setRole(e.target.value);
            console.log(e.target.value);
          }}
        >
          <option>----role----</option>
          <option value={"admin"}>Admin</option>
          <option value={"user"}>User</option>
        </select>
        <input type="submit" />
      </form>
    </>
  );
};

export default Signup;
