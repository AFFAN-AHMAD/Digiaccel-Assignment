import React from "react";
import { useDispatch } from "react-redux";
import { Link, Outlet } from "react-router-dom";
import { logOut } from "../../../redux/user/action";
import styles from "./nav.module.css";
const Navbar = () => {
  const dispatch = useDispatch();
  const handleLogOut = () => {
    console.log("handleLogouttttttttttttttttt");
    localStorage.removeItem("token");
    dispatch(logOut());
  };
  return (
    <div className={styles.container}>
      <Link
        style={{ textDecoration: "none", color: "white", fontSize: "18px" }}
        to={"/admin"}
      >
        Add Questions
      </Link>
      <Link
        style={{ textDecoration: "none", color: "white", fontSize: "18px" }}
        to={"/admin/generate"}
      >
        Generate Quiz
      </Link>
      <Link
        style={{ textDecoration: "none", color: "white", fontSize: "18px" }}
        to={"/admin/tests"}
      >
        Tests
      </Link>
      <div>
        <button onClick={() => handleLogOut()} className={styles.button}>
          Log Out
        </button>
      </div>
    </div>
  );
};

export default Navbar;
