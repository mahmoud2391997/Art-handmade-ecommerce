import { Input, Typography } from "@material-tailwind/react";
import React from "react";
// import SearchIcon from "./icons/SearchIcon";
import { FiSearch as SearchIcon } from "react-icons/fi";

export default function SearchInput() {
  return (
    <div>
      <Typography
        className="uppercase text-[22px] text-[var(--main-gray)]"
        style={{
          fontFamily: "var(--main-font)",
          letterSpacing: ".16em",
          lineHeight: "1.31em",
        }}
      >
        Search
      </Typography>

      <div className="relative w-full max-w-xs">
        <Input
          type="text"
          placeholder="Search products..."
          variant="standard"
          className="pr-12 w-full"
          style={{
            fontFamily: "var(--main-font)",
            fontSize: "16px",
            color: "var(--main-gray)",
          }}
        />
        <SearchIcon
          className="absolute cursor-pointer right-2 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-[var(--main-color)] transition-colors duration-700 ease-in-out"
          size={20}
        />
      </div>
    </div>
  );
}
