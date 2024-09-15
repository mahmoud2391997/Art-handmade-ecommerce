import React, { useState } from "react";
import StarIcon from "../icons/StarIcon";

export default function DynamicStarRating({ totalStars }) {
  const [rating, setRating] = useState(0);
  return (
    <div className="flex">
      {[...Array(totalStars)].map((_, index) => (
        <span key={index} onClick={() => setRating(index + 1)}>
          <StarIcon filled={index < rating} />
        </span>
      ))}
    </div>
  );
}
