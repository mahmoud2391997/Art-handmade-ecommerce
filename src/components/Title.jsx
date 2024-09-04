import React from "react";

export default function Title({ subTitle, title, color }) {
  return (
    <div className="relative flex-col items-center my-8 bg-transparent z-40">
      <h2 className="text-base sm:text-lg text-[#c9ab81] mt-2 font-eb-garamond italic text-center">
        {subTitle}
      </h2>

      <div className="flex items-center w-full ">
        <div
          className={`border-t-[1px] lg:px-2 px-[10px]  ${
            color ? "border-[" + color + "]" : "border-gray-500"
          }   flex-grow mx-2 sm:mx-4 md:mx-10 lg:mx-10 xl:mx-40 `}
        ></div>
        <h1
          className={`uppercase text-xl sm:text-3xl md:text-4xl lg:text-5xl  ${
            color ? "text-" + color : "text-[#525252]"
          } whitespace-nowrap font-eb-garamond text-center mx-4 tracking-[0.16em] leading-5`}
        >
          {title}
        </h1>
        <div
          className={`border-t-[1px] lg:px-2 px-[10px]  ${
            color ? "border-[" + color + "]" : "border-gray-500"
          }   flex-grow mx-2 sm:mx-4 md:mx-10 lg:mx-10 xl:mx-40`}
        ></div>
      </div>
    </div>
  );
}
