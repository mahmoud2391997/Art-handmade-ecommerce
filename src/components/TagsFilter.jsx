import { Typography } from "@material-tailwind/react";
import React, { useState } from "react";

export default function TagsFilter() {
  const [selectedTag, setSelectedTag] = useState([]);
  // Art Books Collections Editions Expo History Painting
  const tags = [
    "Art",
    "Books",
    "Collections",
    "Editions",
    "Expo",
    "History",
    "Painting",
  ];
  return (
    <div className="flex flex-col space-y-4 mb-10">
      <label
        htmlFor="range"
        className="uppercase text-[22px] text-[var(--main-gray)]"
        style={{
          fontFamily: "var(--main-font)",
          letterSpacing: ".16em",
          lineHeight: "1.31em",
        }}
      >
        tags
      </label>
      <div className="flex flex-wrap">
        {tags.map((tag) => (
          <Typography
            key={tag}
            className="capitalize cursor-pointer mb-5 mr-4 font-[400] text-[16px] text-[var(--main-text-color)] hover:text-[var(--main-color)] transition-colors duration-500 ease-in-out"
            style={{
              fontFamily: "var(--third-font)",
              lineHeight: "1.58em",
            }}
          >
            {tag},
          </Typography>
        ))}
      </div>
    </div>
  );
}
