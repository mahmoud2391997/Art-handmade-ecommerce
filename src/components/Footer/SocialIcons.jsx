/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from "react";
import { FaFacebook, FaTwitter, FaWhatsapp, FaInstagram } from "react-icons/fa";

export default function SocialIcons({ Icons }) {
  const iconComponents = {
    "logo-facebook": FaFacebook,
    "logo-twitter": FaTwitter,
    "logo-whatsapp": FaWhatsapp,
    "logo-instagram": FaInstagram,
  };

  return (
    <div className="flex space-x-2 sm:space-x-4 md:space-x-6 ">
      {Icons.map((icon) => {
        const IconComponent = iconComponents[icon.name];
        return (
          <a href={icon.link} key={icon.name}>
            <IconComponent className="text-white w-3 h-3 sm:w-4 sm:h-6 md:w-6 md:h-6 hover:text-[#c9ab81] duration-300" />
          </a>
        );
      })}
    </div>
  );
}
