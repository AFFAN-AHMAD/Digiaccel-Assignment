import React from "react";
import { Link, Outlet } from "react-router-dom";

const Navbar = () => {
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
    </div>
  );
};

export default Navbar;
