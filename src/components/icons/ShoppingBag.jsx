// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import "./icons.css";
import { useSelector } from "react-redux";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faBagShopping } from "@fortawesome/free-solid-svg-icons";

export default function ShoppingBag() {
  // console.log(cartItems);

  const cartItems = useSelector((state) => state.cart.cartItems);
  let totalAmount = 0;
  cartItems.map((item) => {
    totalAmount += item.quantity;
  });

  return (
    <div className="relative cursor-pointer transition-all duration-700 ease-in-out hover:text-[var(--main-color)]">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="size-6 bagIcon relative"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
        />
      </svg>
      <span className="absolute -top-2 -right-2 text-sm ">{totalAmount}</span>
    </div>
  );
}
