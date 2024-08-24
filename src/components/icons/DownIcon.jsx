import React from "react";

export default function DownIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className=" down size-6 w-4 h-4"
      style={{ transition: "stroke 0.3s ease-in-out" }}
    >
      <style>
        {`
      .down:hover {
        stroke: var(--main-color); // Use your custom color here
      }
    `}
      </style>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m19.5 8.25-7.5 7.5-7.5-7.5"
      />
    </svg>
  );
}
