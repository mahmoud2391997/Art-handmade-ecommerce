import React, { useState } from "react";
import { Link, replace, useNavigate } from "react-router-dom";

import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { Button, Input, Radio, Typography } from "@material-tailwind/react";
import MainButton from "../../components/MainButton";
import PageTitle from "../../components/Shared/PageTitle";

import { registerAuthentication } from "../../api/auth";
import ImgTitle from "../../components/ImgTitle";
import axios from "axios";

export default function SignUp() {
  const [response,setResponse] =useState(true)

  const navigate = useNavigate();
  function registerAuthentication(profile, navigate) {
    axios
      .post(`https://art-ecommerce-server.glitch.me/api/auth/register`, profile)
      .then((response) => {
        console.log(response.data);
        if (response.data.success) {
          sessionStorage.setItem("token", response.data.token);
          navigate("/", { replace: true });
          setResponse(true)
        } else{
          setResponse(false)
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }
  const schema = yup.object().shape({
    first_name: yup.string().required("First name is required"),
    last_name: yup.string().required("Last name is required"),
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

    confirmPassword: yup
      .string()
      .required("Please confirm your password")
      .oneOf([yup.ref("password"), null], "Passwords must match"),
    gender: yup.string().required("Gender is required"),
    
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = (data) => {
    console.log(data);
    registerAuthentication(data, navigate);
  };
  return (
    <div className="flex flex-col gap-[10%] lg:gap-10 justify-center items-center h-[100vh] w-[100%] py-auto lg:py-[1%]">
      <ImgTitle title={"sign up"} />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col lg:justify-center  gap-2 lg:gap-5 w-[40%] lg:h-[100%]"
      >
        <div className="flex flex-col lg:flex-row lg:gap-5">
          <div className="flex flex-col gap-2 lg:w-[50%]">
            <Input
              variant="standard"
              label="First Name"
              type="text"
              className="w-[50%]"
              {...register("first_name")}
            />
            {errors.first_name && (
              <Typography className="pl-2 text-red-500 text-sm">
                {errors.first_name.message}
              </Typography>
            )}
          </div>
          <div className="flex flex-col gap-2 lg:w-[50%]">
            <Input
              variant="standard"
              label="Last Name"
              type="text"
              className="w-[50%]"
              {...register("last_name")}
            />
            {errors.last_name && (
              <Typography className="pl-2 text-red-500 text-sm">
                {errors.last_name.message}
              </Typography>
            )}
          </div>
        </div>
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
            label="Password"
            type="password"
            {...register("password")}
          />
          {errors.password && (
            <Typography className="pl-2 text-red-500 text-sm">
              {errors.password.message}
            </Typography>
          )}
        </div>
        <div className="flex flex-col gap-2">
          <Input
            variant="standard"
            label="Confirm Password"
            type="password"
            {...register("confirmPassword")}
          />
          {errors.confirmPassword && (
            <Typography className="pl-2 text-red-500 text-sm">
              {errors.confirmPassword.message}
            </Typography>
          )}
        </div>

        <div className="flex flex-col gap-2">
          <div className="flex gap-5">
            <Radio
              id="male"
              name="gender"
              label="Male"
              value="male"
              {...register("gender")}
              className="border-[var(--main-color)] border-2"
            />
            <Radio
              id="female"
              name="gender"
              label="Female"
              value="female"
              {...register("gender")}
              className="border-[var(--main-color)] border-2"
            />
          </div>
          {errors.gender && (
            <Typography className="pl-2 text-red-500 text-sm">
              {errors.gender.message}
            </Typography>
          )}
        </div>
        {!response ? (
            <Typography className="pl-2 text-red-500 text-sm">
              This account is already used
            </Typography>
          ):null}
          <div className="flex justify-center w-full">
            <Button
              type="submit"
              className="w-fit p-0 bg-transparent shadow-none hover:shadow-none"
            >
              <MainButton title={"sign up"} />
            </Button>
          </div>
        <div className="flex justify-center">
            <Typography
              className="text-[var(--main-gray)] font-normal font-eb-garamond "
              >
            Already have an account ? please 
          <Link to="/login" 
          className="text-[var(--main-gray)]  transition-all duration-500 ease-in-out font-normal underline font-eb-garamond hover:text-[var(--main-color)] ml-1 "
          >
               Login
          </Link>
            </Typography>
        </div>
      </form>
    </div>
  );
}
