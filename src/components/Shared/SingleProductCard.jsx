import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import MainButton from "./MainButton";
import { Card, CardBody } from "@material-tailwind/react";
import StaticStarRating from "./StaticStarRating";
import { fetchProductsAction } from "../../Redux/actions/productActions";

export default function SingleProductCard({ prod, handleAddToCart }) {
  const navigate = useNavigate();
  return (
    <Card
      key={prod._id}
      className="relative flex flex-col items-center group rounded-none"
    >
      {console.log(prod)}
      <div className="relative xl:w-60 w-60 h-60 sm:w-48 sm:h-48 xl:h-60 mb-4 overflow-hidden">
        <img
          src={prod.image}
          className="h-full w-full object-cover"
          alt={prod.name}
        />
        <div className="absolute top-3 left-3 right-3 bottom-3 bg-white bg-opacity-100 flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-x-full transition-transform duration-[2000ms] ease-in-out group-hover:translate-x-0">
          <MainButton
            onClick={() => handleAddToCart(product)}
            title="Add to Cart"
            className="items-center justify-center flex"
          />
        </div>
      </div>
      <CardBody className="xl:w-60 w-full sm:w-56 h-24 xl:h-[124px] flex flex-col items-center justify-around ">
        <h5
          className="sm:text-xl font-eb-garamond text-base leading-5 tracking-[0.14em] cursor-pointer"
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
