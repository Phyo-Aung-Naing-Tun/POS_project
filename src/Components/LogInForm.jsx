import {
  Checkbox,
  Group,
  Loader,
  MantineProvider,
  Paper,
  PasswordInput,
  TextInput,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import React from "react";
import { useGetLogInMutation } from "../Redux/Api/authApi";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getToken } from "../Redux/Slices/authSlice";

const LogInForm = () => {
  const form = useForm({
    initialValues: {
      email: "",
      password: "",
    },
  });
  const [getLogIn, { isLoading }] = useGetLogInMutation();
  const nav = useNavigate();
  const dispatch = useDispatch();
  return (
    <div className=" w-[325px] h-[448px] bg-white">
      <MantineProvider
        theme={{
          fontFamily: "sans-serif",
          colorScheme: "dark",
          radius: "4px",
        }}
      >
        <Paper className=" flex flex-col gap-[32px]">
          <div className=" flex flex-col gap-[20px]">
            <h1 className=" text-[40px] text-[#E8EAED] font-bold tracking-wider">
              mms
            </h1>
            <h2 className=" text-[24px] text-[#FFF] tracking-wide font-semibold tracking-wider">
              Wellcome Back
            </h2>
            <h4 className="text-[15px] text-[#7E7F80] tracking-wide">
              <span className=" text-[#8AB4F8] me-1">Wellcome Back!</span>
              Please enter your detail.
            </h4>
          </div>

          <form
            className=" flex flex-col gap-[30px]"
            onSubmit={form.onSubmit(async (values) => {
              try {
                const { data } = await getLogIn(values);
                console.log(data);

                if (data?.message === "login successfully") {
                  dispatch(getToken(data?.token));
                  nav("/");
                } else {
                  alert(data?.message);
                }
              } catch (error) {
                console.log(error);
              }
            })}
          >
            <div className=" h-[65px] flex flex-col gap-[5px]">
              <label className=" text-[16px] tracking-wide  text-[#FFF]">
                Email
              </label>
              <TextInput radius={"4px"} {...form.getInputProps("email")} />
            </div>
            <div className=" flex flex-col gap-[15px]">
              <div className=" h-[65px] flex flex-col gap-[5px]">
                <label className=" text-[16px] tracking-wide text-[#FFF]">
                  Password
                </label>

                <PasswordInput
                  radius={"4px"}
                  {...form.getInputProps("password")}
                />
              </div>
              <div className=" text-[12px] flex justify-between items-center">
                <div className="flex items-center gap-[5px]">
                  <Checkbox
                    size={"xs"}
                    type="checkbox"
                    // {...form.getInputProps("termsOfService", {
                    //   type: "checkbox",
                    // })}
                  />
                  <h4 className=" tracking-wide text-[12px] text-[#FFF]">
                    Remember Me
                  </h4>
                </div>
                <h4 className=" cursor-pointer tracking-wide text-[12px] text-[#8AB4F8]">
                  Forget Password?
                </h4>
              </div>
            </div>

            <Group className=" flex items-end  h-[55px]">
              <button
                className=" text-[#202124] text-[16px] rounded-[5px] font-bold w-full flex justify-center items-center h-[40px] py-[10px] mt-auto bg-[#8AB4F8]"
                type="submit"
              >
                {isLoading ? <Loader color="gray" size="sm" /> : "LogIn"}
              </button>
            </Group>
          </form>
        </Paper>
      </MantineProvider>
    </div>
  );
};

export default LogInForm;
