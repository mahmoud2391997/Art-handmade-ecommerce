import StaticStarRating from "../components/staticStarRating";
import MainButton from "./MainButton";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { addToCart } from "../Redux/actions/cartActions";
import { useNavigate } from "react-router-dom";
import { Card, CardBody } from "@material-tailwind/react";
import { toast, Bounce } from "react-toastify";
import SingleProductCard from "./Shared/SingleProductCard";
import { fetchBestSellersAction } from "../Redux/actions/productActions";

export default function ProductCard() {
  const dispatch = useDispatch();

  const { bestSellers, status, error } = useSelector(
    (state) => state.bestSellers
  );
  useEffect(() => {
    dispatch(fetchBestSellersAction());
  }, []);

  const handleAddToCart = (product) => {
    console.log("Adding to cart", product);
    const defaultQuantity = 1;
    dispatch(addToCart(product, defaultQuantity));
  };

  if (status === "loading") return <p>Loading...</p>;
  if (status === "failed") return <p>{error}</p>;

  return (
    <div className="relative p-4 mb-7 grid grid-cols-1 lg:grid-cols-3 gap-[10rem]">
      {bestSellers.map((product, index) => (
        <SingleProductCard
          key={index}
          prod={product}
          handleAddToCart={handleAddToCart}
        />
      ))}
    </div>
  );
}
