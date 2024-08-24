// eslint-disable-next-line no-unused-vars
import React from "react";
import "./MainButton.css";

// eslint-disable-next-line react/prop-types
export default function MainButton({ title2 }) {
  return (
    <svg
      width="350"
      height="50"
      viewBox="0 0 150 50"
      xmlns="http://www.w3.org/2000/svg"
      className="stroke-button hover: cursor-pointer"
    >
      <rect
        x="5"
        y="10"
        width="180"
        height="40"
        fill="transparent"
        stroke="var(--stroke)"
        strokeWidth="1"
        strokeDasharray="330% 25"
        strokeDashoffset="240%"
        
      />
      <text
        x="85"
        y="30"
        fill="var(--button-text-color)"
        textAnchor="middle"
        alignmentBaseline="middle"
        fontFamily="var(--button-text-font)"
        fontWeight="600"
        letterSpacing="0.07em"
        fontSize="13"
      >
        {title2}
      </text>
    </svg>
  );
}
