import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logOut } from "../../../redux/user/action";

const NavBar = () => {
  const { name } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("token");
    dispatch(logOut());
  };
  let { token } = useSelector((state) => state.user);
  const myToken = JSON.parse(localStorage.getItem("token"));
  //  useEffect(() => {
  //    if (!token) {
  //      token = myToken;
  //    }
  //    if (!token) {
  //      navigate("/login");
  //    }
  //  }, [token]);

  return (
    <div style={{ display: "flex", justifyContent: "space-around" }}>
      <h3 style={{ textDecoration: "none", color: "white", fontSize: "18px" }}>
        {name}
      </h3>
      <Link
        style={{
          textDecoration: "none",
          color: "white",
          fontSize: "18px",
          marginTop: "15px",
        }}
        to="/user/userTest"
      >
        TESTS
      </Link>
      <Link
        style={{
          textDecoration: "none",
          color: "white",
          fontSize: "18px",
          marginTop: "15px",
        }}
        to="/user/scores"
      >
        SCORES
      </Link>
      <button onClick={() => handleLogout()} style={{height:"25px",marginTop:"15px"}}>Sign Out</button>
    </div>
  );
};

export default NavBar;
