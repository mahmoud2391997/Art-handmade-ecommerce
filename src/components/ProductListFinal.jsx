import StaticStarRating from "./staticStarRating";
import MainButton from "./MainButton";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductsAction } from "../Redux/actions/productActions";
import { addToCart } from "../Redux/actions/cartActions";
import { useNavigate } from "react-router-dom";
import { Card, CardBody } from "@material-tailwind/react";
import SingleProductCard from "./Shared/SingleProductCard";

export default function ProductList({ currentProducts }) {
  // const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleAddToCart = (product) => {
    console.log("Adding to cart", product);
    const defaultQuantity = 1;
    dispatch(addToCart(product, defaultQuantity));
  };

  return (
    <div className="relative p-4 mb-7 grid grid-cols-1 lg:grid-cols-3 gap-[10rem]">
      {currentProducts.map((product, index) => (
        <SingleProductCard
          key={index}
          prod={product}
          handleAddToCart={handleAddToCart}
        />
      ))}
    </div>
  );
}
