import React from "react";
import { useDispatch } from "react-redux";
import { Link, Outlet } from "react-router-dom";
import { logOut } from "../../../redux/user/action";

const Navbar = () => {
  const dispatch = useDispatch()
  const handleLogOut = ()=>{
    console.log("handleLogouttttttttttttttttt")
    localStorage.removeItem("token");
    dispatch(logOut());
  }
  return (
    <div style={{ display: "flex", justifyContent: "space-around" }}>
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
      <button onClick={()=>handleLogOut()}>Log Out</button>
    </div>
  );
};

export default Navbar;
