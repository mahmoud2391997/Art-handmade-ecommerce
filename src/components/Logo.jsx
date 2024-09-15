// eslint-disable-next-line no-unused-vars
import React from "react";

export default function Logo() {
  return (
    <div
      style={{
        backgroundImage: "var(--logo)",
        width: 50,
        height: 50,
        backgroundSize: "contain",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        cursor: "pointer",
      }}
    />
  );
}
