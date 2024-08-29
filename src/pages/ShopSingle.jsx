import React, { useEffect, useState } from "react";
import PageTitle from "../components/Shared/PageTitle";
import {
  Card,
  CardBody,
  CardHeader,
  Typography,
} from "@material-tailwind/react";
import MainButton from "../components/Shared/MainButton";
import StaticStarRating from "../components/Shared/StaticStarRating";
import ShopSingleTabs from "../components/ShopSingleTabs";
import { useParams } from "react-router-dom";
import { addToCart } from "../Redux/actions/cartActions";
import { fetchProductByIDAction } from "../Redux/actions/productActions";
import { useSelector, useDispatch } from "react-redux";
import Quantity from "../components/Shared/Quantity";

export default function ShopSingle() {
  const { productId } = useParams();
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1); // Default quantity
  const products = useSelector((state) => state.products.products);
  const currentProduct = useSelector((state) => state.products.currentProduct);

  useEffect(() => {
    const existingProduct = products.find(
      (product) => product._id === productId
    );

    if (existingProduct) {
      setQuantity(1); // Reset quantity when switching products
    } else {
      dispatch(fetchProductByIDAction(productId));
    }
  }, [productId, products, dispatch]);

  const handleAddToCart = () => {
    dispatch(addToCart(currentProduct, quantity));
  };

  const handleIncreaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const handleDecreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  if (!currentProduct) return <p>Loading...</p>;

  return (
    <div className="z-40 pb-[200px] relative bg-white items-center flex flex-col mb-10">
      <PageTitle title={"Product"} />
      <Card className="w-full max-w-[60rem] h-full flex-row m-40 rounded-none shadow-none">
        <CardHeader
          shadow={false}
          floated={false}
          className="m-0 w-2/4 shrink-0 rounded-none"
        >
          <img
            src={currentProduct.image}
            alt="card-image"
            className="h-full w-full object-cover"
          />
        </CardHeader>
        <CardBody>
          <Typography
            className="mb-4 uppercase"
            style={
              {
                /* styles */
              }
            }
          >
            {currentProduct.name}
          </Typography>
          <div className="mb-6">
            <StaticStarRating rating={currentProduct.rating || 4} />
          </div>
          <Typography
            className="mb-2"
            style={
              {
                /* styles */
              }
            }
          >
            ${currentProduct.price}
          </Typography>
          <Typography
            color="gray"
            className="mt-20 mb-8"
            style={
              {
                /* styles */
              }
            }
          >
            {currentProduct.description}
          </Typography>

          <div className="flex gap-8 items-center">
            <Quantity
              quantity={quantity}
              increaseQuantity={handleIncreaseQuantity}
              decreaseQuantity={handleDecreaseQuantity}
            />
            <MainButton onClick={handleAddToCart} title="Add To Cart" />
          </div>
        </CardBody>
      </Card>
      <div className="w-[100%]" style={{ color: "var(--main-text-color)" }}>
        <div className="flex justify-center items-center">
          <ShopSingleTabs />
        </div>
      </div>
    </div>
  );
}
