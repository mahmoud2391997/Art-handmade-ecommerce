import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import PageTitle from "../../components/Shared/PageTitle";
import { Button, Checkbox, Input, Typography } from "@material-tailwind/react";
import MainButton from "../../components/MainButton";
import { useDispatch } from "react-redux";

import { loginAuthentication } from "../../api/auth";
import { fetchCartItemsAction } from "../../Redux/actions/loggedInCartActions";

export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const schema = yup.object().shape({
    email: yup
      .string()
      .matches(
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        "Invalid email format"
      )
      .required("Email is required"),
    password: yup
      .string()
      .required("Password name is required")
      .min(6, "Password must be at least 6 characters")
      .max(20, "Password must be at most 20 characters"),
    rememberMe: yup.boolean(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = async (data) => {
    loginAuthentication(
      data.email,
      data.password,
      data.rememberMe,
      navigate,
      location
    );

    console.log(data);
  };
  return (
    <div className="flex flex-col gap-[10%] lg:gap-10 justify-center items-center h-[100vh] w-[100%] py-auto lg:py-[5%]">
      <PageTitle title={"log in"} />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col lg:justify-center  gap-2 lg:gap-5 w-[30%] lg:h-[100%]"
      >
        <div className="flex flex-col gap-2">
          <Input
            variant="standard"
            label="Email"
            type="text"
            {...register("email")}
          />
          {errors.email && (
            <Typography className="pl-2 text-red-500 text-sm">
              {errors.email.message}
            </Typography>
          )}
        </div>
        <div className="flex flex-col gap-2">
          <Input
            variant="standard"
            type="password"
            label="Password"
            {...register("password")}
          />
          {errors.password && (
            <Typography className="pl-2 text-red-500 text-sm">
              {errors.password.message}
            </Typography>
          )}
        </div>

        <div className="flex items-center gap-2">
          <Checkbox
            id="rememberMe"
            {...register("rememberMe")}
            className="border-[var(--main-color)] border  checked:bg-[var(--main-color)] checked:border-[var(--main-color)] "
          />
          <label htmlFor="rememberMe" className="text-sm text-[--main-gray]">
            Remember Me
          </label>
        </div>
        <div className="flex justify-center">
          <Button
            type="submit"
            className="self-center lg:self-end w-fit p-0 bg-transparent shadow-none hover:shadow-none"
          >
            <MainButton title={"log in"} />
          </Button>
        </div>
      </form>
    </div>
  );
}
