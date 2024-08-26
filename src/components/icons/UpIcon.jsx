import React from "react";

export default function UpIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="up size-6 w-4 h-4"
      style={{ transition: "stroke 0.3s ease-in-out" }}
    >
      <style>
        {`
      .up:hover {
        stroke: var(--main-color); // Use your custom color here
      }
    `}
      </style>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m4.5 15.75 7.5-7.5 7.5 7.5"
      />
    </svg>
  );
}
