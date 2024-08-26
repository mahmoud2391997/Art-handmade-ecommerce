/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from "react";
import { LOGO, ART, Icons } from "./Footerdata";
import logo from "../../../assets/images/logo.png";
import SocialIcons from "../Footer/SocialIcons";
import "../../../index.css";


export default function Footer() {
  return (
    <>
      <footer className="fixed bottom-0 w-full bg-[#272727] py-6 md:py-[116px] text-white z-10 ">
        <div className="flex flex-col md:flex-row justify-between items-center px-4 sm:px-8 md:px-20 text-center md:text-left py-4 md:py-7 space-y-6 md:space-y-0">
          <Content Links={LOGO} img={logo} />
          <Content Links={ART} title="Art info" />
          <SocialIcons Icons={Icons} />
        </div>
      </footer>
    </>
  );
}

const Content = ({ Links, title, img }) => {
  return (
    <div className="mb-6 md:mb-0 px-2 sm:px-4 md:px-12 w-full md:w-auto text-center md:text-left">
      {img && (
        <img
          src={img}
          alt="logo"
          className="w-[52px] h-[46px] mx-auto md:mx-0 mb-4 md:mb-0"
        />
      )}
      <h1 className="text-lg md:text-xl mb-3 font-eb-garamond">{title}</h1>
      <ul>
        {Links.map((link) => (
          <li key={link.name} className="mb-2">
            <a
              className="hover:text-[#c9ab81] font-eb-garamond duration-300 text-sm md:text-base cursor-pointer leading-6"
              href={link.link}
            >
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};