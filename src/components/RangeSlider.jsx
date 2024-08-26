import React, { useState } from "react";

export default function RangeSlider() {
  const [value, setValue] = useState(50);

  return (
    <div className="w-full max-w-xs mb-10">
      <label
        htmlFor="range"
        className="uppercase text-[22px] text-[var(--main-gray)] mb-4"
        style={{
          fontFamily: "var(--main-font)",
          letterSpacing: ".16em",
          lineHeight: "1.31em",
        }}
      >
        Price: {value}
      </label>
      <input
        id="range"
        type="range"
        min="0"
        max="100"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
        style={{
          accentColor: "var(--main-color)",
          background: `linear-gradient(to right, #edd0a8 0%, #c9ab81 ${value}%, #ddd ${value}%, #ddd 100%)`,
        }}
      />
    </div>
  );
}
//01150649797
