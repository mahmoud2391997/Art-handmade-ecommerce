import React from "react";
import { SlArrowDown, SlArrowUp } from "react-icons/sl";

export const Quantity = ({ quantity, increaseQuantity, decreaseQuantity }) => {
  return (
    <div className="flex items-center border border-gray-300 px-2 py-1 rounded-none">
      <p className="text-gray-600 text-xs sm:text-sm md:text-[12px] lg:text-[14px] mx-1 sm:mx-2 md:mx-4">
        {quantity}
      </p>
      <div className="flex flex-col ml-1 sm:ml-2">
        <p
          onClick={increaseQuantity}
          className="text-gray-500 hover:text-[#c9ab81] cursor-pointer"
        >
          <SlArrowUp className="w-3 h-3 sm:w-4 sm:h-4 md:w-2 md:h-2" />
        </p>
        <p
          onClick={decreaseQuantity}
          className="text-gray-500 hover:text-[#c9ab81] cursor-pointer"
        >
          <SlArrowDown className="w-3 h-3 sm:w-4 sm:h-4 md:w-2 md:h-2" />
        </p>
      </div>
    </div>
  );
};

export default Quantity;
