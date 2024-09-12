import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import MainButton from "./MainButton";
import { Card, CardBody } from "@material-tailwind/react";
import StaticStarRating from "./StaticStarRating";
import { Bounce, toast } from "react-toastify";

export default function SingleProductCard({ prod, handleAddToCart }) {

  const handleCartAction = () => {
    console.log("Product status:", prod.status);
    console.log("Product stock:", prod.stock);
  
    if (prod.status === "out of stock" || prod.stock === 0) {
      console.log("Product is out of stock");
      toast.info("Product is out of stock", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    } else {
      console.log("Product added to cart");
      toast.success("Product added to cart!", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
      handleAddToCart(prod); 
    }
  };

  const navigate = useNavigate();
  return (
    <Card
      key={prod._id}
      className="relative flex flex-col items-center group rounded-none p-3"
    >
      {console.log(prod)}
      <div className="relative xl:w-60 w-60 h-60 sm:w-48 sm:h-48 xl:h-60 mb-4 overflow-hidden">
        <img
          src={prod.image}
          className="w-full h-full object-cover transition-transform duration-300 transform group-hover:scale-105"
          alt={prod.name}
        />
        <div className="absolute top-3 left-3 right-3 bottom-3 bg-white bg-opacity-100 flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-x-full transition-transform duration-[2000ms] ease-in-out group-hover:translate-x-0">
          <MainButton
            onClick={handleCartAction}
            title="Add to Cart"
            className="items-center justify-center flex"
          />
        </div>
      </div>
      <CardBody className="xl:w-60 w-full sm:w-56  xl:h-[124px] flex flex-col items-center justify-around h-auto space-y-2 ">
        <h5
          className="text-base sm:text-lg md:text-xl font-eb-garamond leading-5 tracking-wide cursor-pointer max-w-full" 
          onClick={() => navigate(`/products/${prod._id}`)}
        >
          {prod.name}
        </h5>
        <div className="w-2/3 flex justify-center">
          <StaticStarRating rating={prod.rating || 3} />
        </div>
        <div className="w-full tracking-[0.16em] leading-5 sm:text-l text-base text-center">
          <span>{prod.price}$</span>
        </div>
      </CardBody>
    </Card>
  );
}
