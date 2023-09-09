import React from "react";
import LogInForm from "../Components/LogInForm";

const LogIn = () => {
  return (
    <div className=" flex w-full h-screen justify-center items-center bg-white">
      <div className=" w-[738px] h-screen overflow-hidden ">
        <img
          src="https://img.freepik.com/premium-photo/girl-grocery-shopping-supermarket-ai-generated_206846-4499.jpg?w=900"
          className=" object-cover w-full h-full"
        />
      </div>
      <div className=" flex justify-center items-center w-[542px] bg-[#1A1B1E] h-screen">
        <LogInForm />
      </div>
    </div>
  );
};

export default LogIn;
