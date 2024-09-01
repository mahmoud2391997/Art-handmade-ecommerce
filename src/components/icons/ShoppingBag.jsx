// eslint-disable-next-line no-unused-vars
import React from "react";
import "./icons.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBagShopping } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function ShoppingBag() {

  const  amount  = useSelector((state) => state.cart.amount)

  return (
    <div className="flex gap-1">
      <div>
        <Link to='cart'>
          <FontAwesomeIcon icon={faBagShopping} className="text-xl" />
        </Link>
      </div>
      <p className="text-black">{amount}</p>
    </div>
  );
}
