// eslint-disable-next-line no-unused-vars
import React from "react";
import StarIcon from "./icons/starIcon";

// eslint-disable-next-line react/prop-types
export default function StaticStarRating({ rating }) {
  return (
    <div className="flex">
      {[...Array(5)].map((_, index) => (
        <span key={index}>
          <StarIcon filled={index < rating} />
        </span>
      ))}
    </div>
  );
}
