// eslint-disable-next-line no-unused-vars
import React from 'react'
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

export default function SocialLinks() {
  return (
    <div className="flex space-x-4 mt-8 p-5">
    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
      <FaFacebookF className="w-4 h-4 text-[#525252] hover:text-[#c9ab81] text-xl duration-300 cursor-pointer" />
    </a>
    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
      <FaInstagram className=" w-4 h-4 text-[#525252] hover:text-[#c9ab81] text-xl duration-300 cursor-pointer" />
    </a>
    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
      <FaTwitter className="w-4 h-4 text-[#525252] hover:text-[#c9ab81] text-xl duration-300 cursor-pointer" />
    </a>
  </div>
  )
}
