import React, { useEffect, useState } from "react";
import PageTitle from "../components/Shared/PageTitle";
import { Card, CardBody, CardHeader, Typography, Button } from "@material-tailwind/react";
import MainButton from "../components/Shared/MainButton";
import StaticStarRating from "../components/Shared/StaticStarRating";
import ShopSingleTabs from "../components/ShopSingleTabs";
import { useParams } from "react-router-dom";
import { SlArrowDown, SlArrowUp } from "react-icons/sl";
import { addToCart, increaseQuantity, decreaseQuantity } from "../Redux/actions/cartActions";
import { fetchProductByIDAction } from '../Redux/actions/productActions';
import { useSelector, useDispatch } from "react-redux";

export default function ShopSingle() {
  const { productId } = useParams();
  const dispatch = useDispatch();
  const [product, setProduct] = useState(null);
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

  const handleAddToCart = (product) => {
    console.log('Adding to cart', product)  
    dispatch(addToCart(product));  
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
            <div className="flex items-center p-2 sm:p-4 md:p-6 lg:p-8">
              <div className="flex items-center border border-gray-300 px-2 py-1 rounded-none">
                <p className="text-gray-600 text-xs sm:text-sm md:text-[12px] lg:text-[14px] mx-1 sm:mx-2 md:mx-4">
                  {product.quantity}
                </p>
                <div className="flex flex-col ml-1 sm:ml-2">
                  <p
                    onClick={() => dispatch(increaseQuantity(product._id))}
                    className="text-gray-500 hover:text-[#c9ab81] cursor-pointer"
                  >
                    <SlArrowUp className="w-3 h-3 sm:w-4 sm:h-4 md:w-2 md:h-2" />
                  </p>
                  <p
                    onClick={() => dispatch(decreaseQuantity(product._id))}
                    className="text-gray-500 hover:text-[#c9ab81] cursor-pointer"
                  >
                    <SlArrowDown className="w-3 h-3 sm:w-4 sm:h-4 md:w-2 md:h-2" />
                  </p>
                </div>
              </div>
            </div>
            <MainButton
              onClick={() => handleAddToCart(product)}
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
