import { MantineProvider, Paper } from "@mantine/core";
import React from "react";
import { MdDarkMode } from "react-icons/md";
import { PiBellRingingFill } from "react-icons/pi";
import { BsPersonCircle } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { BsFillSunFill } from "react-icons/bs";
import { setToggle } from "../Redux/Slices/authSlice";

const NavBar = () => {
  const dispatch = useDispatch();
  const { toggleForTheme } = useSelector((state) => state.authSlice);
  console.log(toggleForTheme);
  return (
    <MantineProvider
      theme={{
        colorScheme: `${toggleForTheme ? "dark" : "light"}`,
        radius: 0,
      }}
    >
      <Paper>
        <div
          className={`h-[45px] w-full px-5 border-b  border-b-[#3F4245]  flex justify-between items-center font-bold tracking-widest ${
            toggleForTheme ? "text-[#E8EAED]" : "text-black"
          } text-[26px]`}
        >
          <h1 className=" m-0">mms</h1>
          <ul className=" flex justify-center gap-[10px] items-center  ">
            <li className=" w-[21px] h-[21px] ">
              <PiBellRingingFill className="w-full h-full cursor-pointer hover:text-white" />
            </li>
            <li
              className="w-[21px] h-[21px] "
              onClick={() => dispatch(setToggle())}
            >
              {toggleForTheme ? (
                <BsFillSunFill className=" w-full h-full cursor-pointer hover:text-white" />
              ) : (
                <MdDarkMode className=" w-full h-full cursor-pointer hover:text-white " />
              )}
            </li>
            <li className=" w-[21px] h-[21px]">
              <BsPersonCircle className=" w-full h-full cursor-pointer hover:text-white" />
            </li>
          </ul>
        </div>
      </Paper>
    </MantineProvider>
  );
};

export default NavBar;
