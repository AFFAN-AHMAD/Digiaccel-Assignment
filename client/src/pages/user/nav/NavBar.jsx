import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div style={{ display: "flex", justifyContent: "space-around" }}>
     
      <Link
        style={{ textDecoration: "none", color: "white", fontSize: "18px" }}
        to="/user/userTest"
      >
        TESTS
      </Link>
      <Link
        style={{ textDecoration: "none", color: "white", fontSize: "18px" }}
        to="/user/scores"
      >
        SCORES
      </Link>
    </div>
  );
};

export default NavBar;
