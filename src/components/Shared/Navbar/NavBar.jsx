import React, { useEffect } from "react";
import { Navbar, Collapse, IconButton } from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Logo from "../Logo";
import NavLinks from "./NavLinks";
import MainButton from "../MainButton";
import ShoppingBag from "../../icons/ShoppingBag";
import SearchIcon from "../../icons/SearchIcon";

export default function NavBar() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen((cur) => !cur);

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpen(false)
    );
  }, []);

  return (
    <Navbar color="transparent" fullWidth>
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
            <ShoppingBag />
            <SearchIcon />
            <div className="hidden lg:flex ">
              <MainButton title={"Sign In"} />
              <MainButton title={"Log In"} />
            </div>
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
      <Collapse open={open}>
        <div className="mt-2 rounded-xl bg-white py-2">
          {/* | Nav Links component in mobile and tablet | */}
          <NavLinks />
          <div className="flex justify-center">
            <MainButton title={"Sign In"} />
            <MainButton title={"Log In"} />
          </div>
        </div>
      </Collapse>
    </Navbar>
  );
}
