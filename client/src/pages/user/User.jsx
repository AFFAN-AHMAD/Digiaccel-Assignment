import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router";
import Live from "./live/Live";
import NavBar from "./nav/NavBar";
import { Outlet } from "react-router";
const User = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  let { token } = useSelector((state) => state.user);
  const myToken = JSON.parse(localStorage.getItem("token"));
  useEffect(() => {
    if (!token) {
      token = myToken;
    }
    if (!token) {
      navigate("/login");
    }
  }, [token]);
  return (
    <div>
      <NavBar/>
      {/* <Live /> */}
      <Outlet/>
    </div>
  );
};

export default User;
