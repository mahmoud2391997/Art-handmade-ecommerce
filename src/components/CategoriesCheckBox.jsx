import React, { useState } from "react";
import { Checkbox, Typography } from "@material-tailwind/react";

export default function CategoriesCheckbox() {
  const [selectedCategories, setSelectedCategories] = useState([]);

  const categories = ["Brochure", "Lifestyle", "Museum", "Souvenirs"];

  const handleCheckboxChange = (category) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((item) => item !== category)
        : [...prev, category]
    );
  };

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
        categories
      </label>
      {categories.map((category) => (
        <label key={category} className="flex items-center space-x-2">
          <Checkbox
            // style={{
            //   accentColor: "var(--main-color)",
            //   //   backgroundColor: "var(--main-color)",
            //   borderColor: "var(--main-color)",
            // }}
            className="border-[var(--main-color)] checked:bg-[var(--main-color)] checked:border-[var(--main-color)]"
            // color="gray"
            checked={selectedCategories.includes(category)}
            onChange={() => handleCheckboxChange(category)}
          />
          <Typography
            className="capitalize cursor-pointer font-[400] italic text-[17px] text-[var(--main-text-color)] hover:text-[var(--main-color)] transition-colors duration-500 ease-in-out"
            style={{
              fontFamily: "var(--main-font)",
            }}
          >
            {category}
          </Typography>
        </label>
      ))}
    </div>
  );
}
