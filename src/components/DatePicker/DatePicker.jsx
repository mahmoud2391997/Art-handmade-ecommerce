import { useState } from "react";

function DatePicker({ value, onChange }) {
  return (
    <div className="relative w-72 ">
      <label
        htmlFor="birthdate"
        className="block text-sm font-medium mb-2  dark:text-white mt-5 "
      >
        Birthdate
      </label>
      <div className="w-full mt-3">
        <input
          id="birthdate"
          type="date"
          value={value}
          onChange={(e) => {
            onChange(e.target.value);
          }}
          className="py-3 px-4 ps-11 block w-[90%] border-0 border-b-gray-500 shadow-sm border-b   text-sm focus:z-10 focus:border-gray-500 focus:ring-gray-500 disabled:opacity-50 disabled:pointer-events-none "
        />
        <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
          <svg
            className="h-5 w-5 text-gray-400"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M15.707 6.293a1 1 0 0 1 0 1.414L12.414 11H14a1 1 0 0 1 0 2H10a1 1 0 0 1-.707-.293a1 1 0 0 1 0-1.414L13.586 9H12a1 1 0 0 1 0-2h4a1 1 0 0 1 .707-.293z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default DatePicker;
