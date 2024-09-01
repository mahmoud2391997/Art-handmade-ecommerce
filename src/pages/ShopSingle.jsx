import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import PageTitle from "../components/Shared/PageTitle";
import { Card, CardBody, CardHeader, Typography } from "@material-tailwind/react";
import MainButton from "../components/Shared/MainButton";
import StaticStarRating from "../components/Shared/StaticStarRating";
import ShopSingleTabs from "../components/ShopSingleTabs";
import { addToCart } from "../Redux/actions/cartActions";
import { fetchProductByIDAction } from '../Redux/actions/productActions';
import { SlArrowDown, SlArrowUp } from "react-icons/sl";

export default function ShopSingle() {
  const { productId } = useParams();
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);

  // Access state from Redux store
  const currentProduct = useSelector((state) => state.products.currentProduct);


  useEffect(() => {
    dispatch(fetchProductByIDAction(productId));
  }, [productId, dispatch]);

  const handleAddToCart = () => {
    if (currentProduct) {
      dispatch(addToCart(currentProduct, quantity));
    }
  };

  //should ensure they only affect the local quantity state variable and not the cart state because if I use dispatch it will update the quantity when I incease or decrease without addToCart Function

  const handleIncreaseQuantity = () => {  
    setQuantity(prevQuantity => prevQuantity + 1);  
};  

const handleDecreaseQuantity = () => {  
    setQuantity(prevQuantity => Math.max(prevQuantity - 1, 1));  
}; 

  if (!currentProduct) return <p>Product Not Found</p>;

  return (
    <div className="z-40 pb-[200px] relative bg-white items-center flex flex-col mb-10">
      <PageTitle title="Product" />
      <Card className="w-full max-w-[60rem] h-full flex-row m-40 rounded-none shadow-none">
        <CardHeader shadow={false} floated={false} className="m-0 w-2/4 shrink-0 rounded-none">
          <img
            src={currentProduct.image}
            alt="card-image"
            className="h-full w-full object-cover"
          />
        </CardHeader>
        <CardBody>
          <Typography className="mb-4 uppercase">
            {currentProduct.name}
          </Typography>
          <div className="mb-6">
            <StaticStarRating rating={currentProduct.rating || 4} />
          </div>
          <Typography className="mb-2">
            ${currentProduct.price}
          </Typography>
          <Typography color="gray" className="mt-20 mb-8">
            {currentProduct.description}
          </Typography>

          <div className="flex gap-8 items-center">
            <div className="flex items-center border border-gray-300 px-2 py-1 rounded-none">
              <p className="text-gray-600 text-xs sm:text-sm md:text-[12px] lg:text-[14px] mx-1 sm:mx-2 md:mx-4">
                {quantity}
              </p>
              <div className="flex flex-col ml-1 sm:ml-2">
                <p
                  onClick={handleIncreaseQuantity}
                  className="text-gray-500 hover:text-[#c9ab81] cursor-pointer"
                >
                  <SlArrowUp className="w-3 h-3 sm:w-4 sm:h-4 md:w-2 md:h-2" />
                </p>
                <p
                  onClick={handleDecreaseQuantity}
                  className="text-gray-500 hover:text-[#c9ab81] cursor-pointer"
                >
                  <SlArrowDown className="w-3 h-3 sm:w-4 sm:h-4 md:w-2 md:h-2" />
                </p>
              </div>
            </div>
            <MainButton onClick={handleAddToCart} title="Add To Cart" />
          </div>
        </CardBody>
      </Card>
      <div className="w-full" style={{ color: "var(--main-text-color)" }}>
        <div className="flex justify-center items-center">
          <ShopSingleTabs />
        </div>
      </div>
    </div>
  );
}
