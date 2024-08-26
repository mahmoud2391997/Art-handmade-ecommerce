// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import "./RollUp.css";

export default function RollUp() {
  const [showScrollToTop, setShowScrollToTop] = useState(false);


  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowScrollToTop(true);
      } else {
        setShowScrollToTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div className="relative">
      {showScrollToTop && (
        <div
          onClick={scrollToTop}
          className="fixed bottom-20 right-5 md:right-10 p-2 md:p-3 md:px-5 md:py-4 bg-[#504f4f] text-white rounded-none shadow-md duration-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 cursor-pointer"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m4.5 15.75 7.5-7.5 7.5 7.5"
              className="transition-transform duration-300"
            />
          </svg>
        </div>
      )}
    </div>
  );
}
