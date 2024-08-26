import { Typography } from "@material-tailwind/react";
import React from "react";
import background from "../../assets/images/title-img-2.jpg";
export default function PageTitle({ title }) {
  return (
    <div
      style={{
        width: "100%",
        height: 150,
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "top",
        backgroundRepeat: "no-repeat",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Typography
        className="text-white uppercase mx-20"
        style={{
          fontSize: "32px",
          fontFamily: "var(--page-title-font)",
          letterSpacing: ".16em",
          lineHeight: "2.33em",
        }}
      >
        {title}
      </Typography>
    </div>
  );
}
