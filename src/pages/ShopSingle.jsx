import React, { useEffect, useState } from "react";
import PageTitle from "../components/Shared/PageTitle";
import { Card, CardBody, CardHeader, Typography } from "@material-tailwind/react";
import MainButton from "../components/Shared/MainButton";
import StaticStarRating from "../components/Shared/StaticStarRating";
import ShopSingleTabs from "../components/ShopSingleTabs";
import { useParams } from "react-router-dom";
import { addToCart, increaseQuantity, decreaseQuantity } from "../Redux/actions/cartActions";
import { fetchProductByIDAction } from '../Redux/actions/productActions';
import { useSelector, useDispatch } from "react-redux";
import Quantity from "../components/Shared/Quantity";

export default function ShopSingle() {
  const { productId } = useParams();
  const dispatch = useDispatch();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1); // Default quantity
  const products = useSelector((state) => state.products.products);
  const currentProduct = useSelector((state) => state.products.currentProduct);

  useEffect(() => {
    const existingProduct = products.find(product => product._id === productId);

    if (existingProduct) {
      setProduct(existingProduct);
    } else {
      dispatch(fetchProductByIDAction(productId));
    }
  }, [productId, products, dispatch]);

  useEffect(() => {
    if (currentProduct && currentProduct._id === productId) {
      setProduct(currentProduct);
    }
  }, [currentProduct, productId]);

  if (!product) return <p>Loading...</p>;

  const handleAddToCart = () => {
    dispatch(addToCart({ ...product, quantity }));
  };

  return (
    <div className="z-40 pb-[200px] relative bg-white items-center flex flex-col mb-10">
      <PageTitle title={"Product"} />
      <Card className="w-full max-w-[60rem] h-full flex-row m-40 rounded-none shadow-none">
        <CardHeader shadow={false} floated={false} className="m-0 w-2/4 shrink-0 rounded-none">
          <img
            src={product.image}
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
            {product.name}
          </Typography>
          <div className="mb-6">
            <StaticStarRating rating={product.rating || 4} />
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
            ${product.price}
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
            {product.description}
          </Typography>

          <div className="flex gap-8 items-center">
            <Quantity
              quantity={quantity}
              onQuantityChange={setQuantity}
            />
            <MainButton
              onClick={handleAddToCart}
              title="Add To Cart"
            />
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
              SKU:
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
              Category:
              <span
                style={{
                  textTransform: "capitalize",
                  fontFamily: "var(--third-font)",
                  letterSpacing: "0",
                  marginLeft: "20px",
                }}
              >
                {product.category}
              </span>
            </Typography>
          </div>
        </CardBody>
      </Card>
      <div
        className="w-[100%]"
        style={{
          color: "var(--main-text-color)",
        }}
      >
        <div className="flex justify-center items-center">
          <ShopSingleTabs />
        </div>
      </div>
    </div>
  );
}
