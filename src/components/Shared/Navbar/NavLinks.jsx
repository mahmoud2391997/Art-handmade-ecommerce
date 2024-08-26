import { Typography } from "@material-tailwind/react";
import React from "react";

export default function NavLinks() {
  const links = ["home", "pages", "events", "shop", "blog"];
  return (
    <ul className="mb-4 mt-2 flex flex-col gap-3 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-8">
      {links.map((link, index) => (
        <a key={index} href="#" className="relative group font">
          <Typography
            as="li"
            className="flex items-center"
            style={{
              color: "var(--nav-links-color)",
              fontFamily: "var(--nav-links-font)",
              fontSize: "14px",
              fontWeight: "500",
              textTransform: "uppercase",
              letterSpacing: ".235em",
              lineHeight: "2.33em",
              cursor: "pointer",
            }}
          >
            {link}
            <span
              className="absolute right-0 bottom-0 w-0 h-[1px] transition-all duration-1000 lg:duration-700  ease-in-out group-hover:left-0 group-hover:w-full"
              style={{ backgroundColor: "var(--main-color)" }}
            />
          </Typography>
        </a>
      ))}
    </ul>
  );
}
