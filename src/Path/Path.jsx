import React from "react";
import { Route, Routes } from "react-router-dom";
import LogIn from "../Pages/LogIn";
import GuardPage from "../Pages/GuardPage";
import DashBord from "../Pages/DashBord";

const Path = () => {
  return (
    <div>
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
