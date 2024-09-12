import React, { useState } from "react";

export default function RangeSlider({
  value,
  setValue,
  minValue,
  maxValue,
  setMinValue,
  setMaxValue,
}) {
  // const [value, setValue] = useState(100);
  // const [minValue, setMinValue] = useState(200);
  // const [maxValue, setMaxValue] = useState(1000);
  const min = 50;
  const max = 1500;
  const percentage = ((value - min) / (max - min)) * 100;

  // const handleMinChange = (e) => {
  //   const value = Math.min(e.target.value, maxValue - 1);
  //   setMinValue(value);
  // };

  // const handleMaxChange = (e) => {
  //   const value = Math.max(e.target.value, minValue + 1);
  //   setMaxValue(value);
  // };

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
        min={min}
        max={max}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
        style={{
          accentColor: "var(--main-color)",
          background: `linear-gradient(to right, #edd0a8 0%, #c9ab81 ${percentage}%, #ddd ${percentage}%, #ddd 100%)`,
        }}
      />
    </div>
  );
}

{
  /* <div className="w-full max-w-xs mb-10">
      <div className="flex justify-between mb-4">
        <span>Price: {minValue}</span>
        <span>{maxValue}</span>
      </div>
      <div className="relative">
        <input
          type="range"
          min={min}
          max={max}
          value={minValue}
          onChange={handleMinChange}
          className="absolute w-full h-2 bg-transparent appearance-none pointer-events-auto"
          style={{
            accentColor: "var(--main-color)",
            zIndex: minValue > maxValue - 1 ? 2 : 1,
            // accentColor: "transparent",
          }}
        />
        <input
          type="range"
          min={min}
          max={max}
          value={maxValue}
          onChange={handleMaxChange}
          className="absolute w-full h-2 bg-transparent appearance-none pointer-events-auto"
          style={{
            accentColor: "var(--main-color)",
            zIndex: maxValue > minValue + 1 ? 2 : 1,
            // accentColor: "transparent",
          }}
        />
        <div
          className="absolute w-full h-2 bg-gray-200 rounded-lg cursor-pointer"
          style={{
            zIndex: 0,
            background: `linear-gradient(to right, #ddd ${
              ((minValue - min) / (max - min)) * 100
            }% , #c9ab81 ${((minValue - min) / (max - min)) * 100}%, #c9ab81 ${
              ((maxValue - min) / (max - min)) * 100
            }%, #ddd ${((maxValue - min) / (max - min)) * 100}%)`,
          }}
        />
      </div>
    </div> */
}

// import React, { useState } from "react";

// export default function RangeSlider() {
//   const [minValue, setMinValue] = useState(200);
//   const [maxValue, setMaxValue] = useState(1000);
//   const min = 50;
//   const max = 1500;

//   const handleMinChange = (e) => {
//     const value = Math.min(Number(e.target.value), maxValue - 1);
//     setMinValue(value);
//   };

//   const handleMaxChange = (e) => {
//     const value = Math.max(Number(e.target.value), minValue + 1);
//     setMaxValue(value);
//   };

//   return (
//     <div className="w-full max-w-xs mb-10">
//       <div className="flex justify-between mb-4">
//         <span>Price: {minValue}</span>
//         <span>{maxValue}</span>
//       </div>
//       <div className="relative h-2">
//         {/* Track */}
//         <div className="absolute w-full h-2 bg-gray-200 rounded-lg" />

//         {/* Highlighted range */}
//         <div
//           className="absolute h-2 bg-gray-500 rounded-lg pointer-events-none"
//           style={{
//             left: `${((minValue - min) / (max - min)) * 100}%`,
//             width: `${((maxValue - minValue) / (max - min)) * 100}%`,
//           }}
//         />

//         {/* Min range slider */}
//         <input
//           type="range"
//           min={min}
//           max={max}
//           value={minValue}
//           onChange={handleMinChange}
//           className="absolute w-full h-2 bg-transparent appearance-none pointer-events-auto"
//           style={{
//             zIndex: minValue > maxValue - 10 ? 2 : 1, // Adjust z-index for interactivity
//           }}
//         />

//         {/* Max range slider */}
//         <input
//           type="range"
//           min={min}
//           max={max}
//           value={maxValue}
//           onChange={handleMaxChange}
//           className="absolute w-full h-2 bg-transparent appearance-none pointer-events-auto"
//           style={{
//             zIndex: maxValue > minValue + 10 ? 2 : 1, // Adjust z-index for interactivity
//           }}
//         />
//       </div>
//     </div>
//   );
// }
