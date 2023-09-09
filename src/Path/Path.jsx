import React from "react";
import { Route, Routes } from "react-router-dom";
import LogIn from "../Pages/LogIn";

const Path = () => {
  return (
    <div>
      <Routes>
        <Route path="/login" element={<LogIn />} />
      </Routes>
    </div>
  );
};

export default Path;
