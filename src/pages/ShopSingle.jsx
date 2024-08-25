import React, { useState } from "react";
import PageTitle from "../components/Shared/PageTitle";
import {
  Card,
  CardBody,
  CardHeader,
  Typography,
} from "@material-tailwind/react";
import test from "../assets/images/test.jpg";
import MainButton from "../components/Shared/MainButton";
import Quantity from "../components/Shared/Quantity";
// import DynamicStarRating from "../components/Shared/DynamicStarRating";
import StaticStarRating from "../components/Shared/StaticStarRating";
import ShopSingleTabs from "../components/ShopSingleTabs";
import ProductCard from "../components/Shared/ProductCard";

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
    <div className="flex items-center flex-col mb-10">
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
          {/* <DynamicStarRating totalStars={5} /> */}
          <div className="mb-6">
            <StaticStarRating rating={4} />
          </div>
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
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco lab oris nisi ut.
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
          <div
            className="uppercase mt-10"
            style={{ color: "var(--main-gray)" }}
          >
            <Typography
              style={{
                fontFamily: "var(--main-font)",
                fontSize: "17px",
                lineHeight: "1.35em",
                letterSpacing: ".16em",
                fontWeight: 400,
              }}
            >
              sku :
              <span
                style={{
                  textTransform: "capitalize",
                  fontFamily: "var(--third-font)",
                  letterSpacing: "0em",
                  marginLeft: "20px",
                }}
              >
                003
              </span>
            </Typography>
            <Typography
              style={{
                fontFamily: "var(--main-font)",
                fontSize: "17px",
                lineHeight: "1.35em",
                letterSpacing: ".16em",
                fontWeight: 400,
              }}
            >
              categories :
              <span
                style={{
                  textTransform: "capitalize",
                  fontFamily: "var(--third-font)",
                  letterSpacing: "0",
                  marginLeft: "20px",
                }}
              >
                lifestyle
              </span>
            </Typography>
          </div>
        </CardBody>
      </Card>
      {/* tabs section */}
      <div
        className="w-[100%]"
        style={{
          color: "var(--main-text-color)",
          // borderBottom: "1px solid var(--light-gray)",
        }}
      >
        <div className="flex justify-center items-center">
          <ShopSingleTabs />
        </div>
      </div>
    </div>
  );
}
