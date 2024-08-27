import React from "react";
import UpIcon from "../icons/UpIcon";
import DownIcon from "../icons/DownIcon";

export default function Quantity({
  quantity,
  onQuantityChange,
}) {
  return (
    <div className="w-24 max-w-sm relative rounded-none">
      <div className="relative rounded-none ">
        <input
          type="number"
          className="w-full pl-4 h-10 pr-3 py-2 placeholder:text-black text-slate-700 text-sm border rounded-none transition duration-300 ease-in-out focus:outline-none focus:border-slate-400 hover:border-slate-400 shadow-sm focus:shadow-md"
          style={{ borderColor: "var(--button-text-color)" }}
          placeholder="quantity"
          value={quantity}
          onChange={(e) => onQuantityChange(Number(e.target.value))}
        />
        <button
          className="absolute right-1 top-1 my-auto px-2 flex items-center bg-white rounded"
          type="button"
          onClick={() => onQuantityChange(quantity + 1)}
        >
          <UpIcon />
        </button>

        <button
          className="absolute right-1 top-5 my-auto px-2 flex items-center bg-white rounded"
          type="button"
          onClick={() => onQuantityChange(Math.max(quantity - 1, 1))}
        >
          <DownIcon />
        </button>
      </div>
    </div>
  );
}
