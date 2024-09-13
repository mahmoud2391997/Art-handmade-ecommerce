import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";
import PageTitle from "../../components/Shared/PageTitle";
import { Button, Checkbox, Input, Typography } from "@material-tailwind/react";
import MainButton from "../../components/MainButton";
import { useDispatch, useSelector } from "react-redux";

import {
  fetchCartItemsAction,
  updateCartItemsAction,
} from "../../Redux/actions/loggedInCartActions";
import axios from "axios";
import ImgTitle from "../../components/ImgTitle";

export default function Login() {
  const [response,setResponse] =useState(true)
  const [showPassword, setShowPassword] = useState(false)
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  async function loginAuthentication(
    email,
    password,
    rememberMe,
    navigate,
    location
  ) {
    try {
      const response = await axios.post(
        `https://art-ecommerce-server.glitch.me/api/auth/login`,
        {
          email: email,
          password: password,
        }
      );
      console.log(response.data);
      if (response.data.success) {
        if (rememberMe) {
          localStorage.setItem("token", response.data.token);
          sessionStorage.setItem("token", response.data.token);
        } else {
          sessionStorage.setItem("token", response.data.token);
        }
        // navigate("/", { replace: true });
        console.log(location.state);
        const redirectTo = location.state?.from?.pathname || "/";
        navigate(redirectTo, { replace: true });

        dispatch(fetchCartItemsAction())
        setResponse(true);
      } else {
        setResponse(false);
        
      }
    } catch (error) {
      console.error(error);
    }
  }
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
    await loginAuthentication(
      data.email,
      data.password,
      data.rememberMe,
      navigate,
      location
    )
    if (response) {
      setError('authentication', {
        type: 'manual',
        message: 'Invalid email or password',
      });
    }
  };
  console.log(response);
  useEffect(()=>{},[response]);
  return (
    <div className="flex flex-col gap-[10%] lg:gap-10 justify-center items-center h-[100vh] w-[100%] py-auto lg:py-[5%]">
      <ImgTitle title={"log in"} />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col lg:justify-center gap-2 lg:gap-5 w-[90%] sm:w-[70%] md:w-[50%] lg:w-[30%] lg:h-[100%] mx-auto"
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
        <div className="flex flex-col gap-2 relative">
          <Input
            variant="standard"
            type={showPassword ? "text" : "password"}
            label="Password"
            {...register("password")}
          />
          <span
            className="absolute right-2 top-1/2 transform -translate-y-1/2 cursor-pointer"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? (
            <EyeIcon className="w-5 h-5 text-gray-500" />
            ) : (
              <EyeSlashIcon className="w-5 h-5 text-gray-500" />
            )}
          </span>
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
        {!response ? (
            <Typography className="pl-2 text-red-500 text-sm">
              invalid email or password
            </Typography>
          ):null}
        <div className="flex justify-center">
          <Button
            type="submit"
            className="self-center lg:self-end w-fit p-0 bg-transparent shadow-none hover:shadow-none"
          >
            <MainButton title={"log in"} />
          </Button>
        </div>
        <div className="flex justify-center">
            <Typography
              className="text-[var(--main-gray)] font-normal font-eb-garamond "
              >
            Don't have an account ? please 
          <Link to="/signup" 
          className="text-[var(--main-gray)]  transition-all duration-500 ease-in-out font-normal underline font-eb-garamond hover:text-[var(--main-color)] ml-1 "
          >
              Sign up
          </Link>
            </Typography>
        </div>      
        </form>
    </div>
  );
}
