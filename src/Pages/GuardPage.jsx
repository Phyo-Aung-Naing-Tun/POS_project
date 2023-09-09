import Cookies from "js-cookie";
import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const GuardPage = ({ children }) => {
  const token = useSelector((state) => state.authSlice);
  console.log(token);
  console.log();
  if (Cookies.get("token") === undefined) {
    return <Navigate to={"/login"} />;
  } else {
    return children;
  }
};

export default GuardPage;
