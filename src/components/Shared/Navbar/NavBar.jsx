import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { Navbar, Collapse, IconButton } from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

import Logo from "../Logo";
import NavLinks from "./NavLinks";
import MainButton from "../MainButton";
import ShoppingBag from "../../icons/ShoppingBag";
import SearchIcon from "../../icons/SearchIcon";
import { isAuth } from "../../../utils/isAuth";

export default function NavBar() {
  const [open, setOpen] = useState(false);
  const [isLogged, setIsLogged] = useState(
    localStorage.getItem("token") || sessionStorage.getItem("token")
  );
  const navigate = useNavigate();
  const handleOpen = () => setOpen((cur) => !cur);

  const goToSignUp = () => {
    navigate("/signup");
  };

  const goToLogIn = () => {
    navigate("/login");
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    sessionStorage.removeItem("token");
    console.log("logged out, token removed");
    setIsLogged(null);
  };

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpen(false)
    );
  }, []);

  useEffect(() => {
    // const token =
    //   localStorage.getItem("token") || sessionStorage.getItem("token");
    // setIsLogged(token);
  }, [isLogged]);

  return (
    <Navbar
      color="transparent"
      fullWidth
      className="sticky top-0 z-50 bg-white w-screen p-0 lg:p-4"
    >
      <div className="container mx-auto my-6 flex items-center justify-between text-blue-gray-900">
        <div className="flex justify-between w-full mr-4 lg:mr-0">
          <div className="flex justify-center items-center gap-8">
            {/* | Logo component | */}
            <Logo />
            <div className="hidden lg:block">
              {/* | Nav Links component in lg| */}
              <NavLinks />
            </div>
          </div>
          <div className="flex justify-center items-center gap-4 ">
            <Link to="/cart">
              <ShoppingBag />
            </Link>
            <SearchIcon />
            {!isAuth() ? (
              <div className="hidden lg:flex ">
                <MainButton title={"sign up"} onClick={goToSignUp} />
                <MainButton title={"log in"} onClick={goToLogIn} />
              </div>
            ) : (
              <div className="hidden lg:flex ">
                <MainButton title={"log out"} onClick={handleLogout} />
              </div>
            )}
          </div>
        </div>
        <IconButton
          size="sm"
          variant="text"
          color="blue-gray"
          onClick={handleOpen}
          className="ml-auto inline-block text-blue-gray-900 lg:hidden"
        >
          {open ? (
            <XMarkIcon className="h-6 w-6" strokeWidth={2} />
          ) : (
            <Bars3Icon className="h-6 w-6" strokeWidth={2} />
          )}
        </IconButton>
      </div>
      <Collapse open={open} className="w-full rounded-none bg-white">
        <div className="p-4 mt-2 z-40 w-full ms-0 relative rounded-none bg-white pb-6 h-fit">
          {/* | Nav Links component in mobile and tablet | */}
          <NavLinks />
          {!isAuth() ? (
            <div className="flex justify-center">
              <MainButton title={"sign up"} onClick={goToSignUp} />
              <MainButton title={"log in"} onClick={goToLogIn} />
            </div>
          ) : (
            <div className="flex justify-center">
              <MainButton title={"log out"} onClick={handleLogout} />
            </div>
          )}
        </div>
      </Collapse>
    </Navbar>
  );
}
