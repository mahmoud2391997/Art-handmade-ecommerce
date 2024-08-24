import React, { useEffect, useState } from "react";
import PageTitle from "../components/Shared/PageTitle";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Typography,
} from "@material-tailwind/react";
import test from "../assets/images/test.jpg";
import MainButton from "../components/Shared/MainButton";
import UpIcon from "../components/icons/UpIcon";
import DownIcon from "../components/icons/DownIcon";
import Quantity from "../components/Shared/Quantity";

export default function ShopSingle() {
  let [quantity, setQuantity] = useState(0);

  const handleUp = () => {
    setQuantity(quantity + 1);
  };

  const handleDown = () => {
    setQuantity(Math.max(0, quantity - 1));
  };

  const handleQuantityChange = (e) => {
    const value = Math.max(0, Number(e.target.value));
    setQuantity(value);
  };

  return (
    // Shop single container
    <div className="flex items-center flex-col">
      <PageTitle title={"product"} />
      <Card className="w-full max-w-[60rem] h-full flex-row m-40 rounded-none shadow-none">
        <CardHeader
          shadow={false}
          floated={false}
          className="m-0 w-2/4 shrink-0 rounded-none"
        >
          <img
            src={test}
            alt="card-image"
            className="h-full w-full object-cover"
          />
        </CardHeader>
        <CardBody>
          <Typography
            className="mb-4 uppercase"
            style={{
              color: "var(--heading-text-color)",
              fontFamily: "var(--main-font)",
              fontSize: "40px",
              fontWeight: 400,
              lineHeight: "1.17em",
              letterSpacing: ".16em",
            }}
          >
            linen bag
          </Typography>
          <Typography
            className="mb-2"
            style={{
              color: "var(--heading-text-color)",
              fontFamily: "var(--main-font)",
              fontSize: "22px",
              fontWeight: 400,
              lineHeight: "1.17em",
            }}
          >
            29$
          </Typography>

          <Typography
            color="gray"
            className="mt-20 mb-8"
            style={{
              fontFamily: "var(--third-font)",
              color: "var(--heading-text-color)",
              fontSize: "17px",
              fontWeight: 400,
              lineHeight: "1.58em",
            }}
          >
            Like so many organizations these days, Autodesk is a company in
            transition. It was until recently a traditional boxed software
            company selling licenses. Yet its own business model disruption is
            only part of the story
          </Typography>

          <div className="flex gap-8 items-center">
            <Quantity
              quantity={quantity}
              setQuantity={setQuantity}
              handleUp={handleUp}
              handleDown={handleDown}
              handleQuantityChange={handleQuantityChange}
            />
            <MainButton title={"add to cart"} />
          </div>

          <a href="#" className="inline-block">
            <Button variant="text" className="flex items-center gap-2">
              Learn More
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                className="h-4 w-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                />
              </svg>
            </Button>
          </a>
        </CardBody>
      </Card>
    </div>
  );
}
