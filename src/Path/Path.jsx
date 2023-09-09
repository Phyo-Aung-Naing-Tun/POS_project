import React from "react";
import { Route, Routes } from "react-router-dom";
import LogIn from "../Pages/LogIn";
import GuardPage from "../Pages/GuardPage";
import DashBord from "../Pages/DashBord";
import NavBar from "../Components/NavBar";

const Path = () => {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={
            <GuardPage>
              <DashBord />
            </GuardPage>
          }
        />
        <Route path="/login" element={<LogIn />} />
      </Routes>
    </div>
  );
};

export default Path;
