import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
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
import { addToCart } from "../Redux/actions/cartActions";
import { fetchProductByIDAction } from "../Redux/actions/productActions";
import Quantity from "../components/Shared/Quantity";
import { SlArrowDown, SlArrowUp } from "react-icons/sl";
import { updateCartItemsAction } from "../Redux/actions/loggedInCartActions";

export default function ShopSingle() {
  const { productId } = useParams();
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);
  const { loggedinCart } = useSelector((state) => state.loggedinCart);
  // Access state from Redux store
  const currentProduct = useSelector((state) => state.products.currentProduct);
  /////////////الجزء دا عشان اول مافتح الصفحة يجبهالى من اول///////////////////
  /******* */ useEffect(() => {
    /******* */
    /******* */ window.scrollTo(0, 0); /******* */
    /******* */
  }, []); /******* */
  ///////////////////////////////////////////////////////////////////

  useEffect(() => {
    dispatch(fetchProductByIDAction(productId));
  }, [productId, dispatch]);

  const handleAddToCart = (product) => {
    if (!sessionStorage.getItem("token") && !localStorage.getItem("token")) {
      console.log("Adding to cart", product);
      if (currentProduct) {
        console.log(quantity);

        dispatch(addToCart(currentProduct, quantity));
      }
    } else {
      console.log(loggedinCart);
      console.log(
        [...loggedinCart].filter(
          (item) => item.item._id == currentProduct.product_Id
        ).length
      );

      if (
        [...loggedinCart].filter(
          (item) => item.item._id == currentProduct.product_Id
        ) != 0
      ) {
        const newCart = [...loggedinCart].map((item) => {
          console.log(item);
          console.log(currentProduct._id);

          if (item.item._id == currentProduct._id) {
            return {
              productId: item.item._id,
              quantity: item.quantity + quantity,
            };
          } else {
            return { productId: item.item._id, quantity: item.quantity };
          }
        });

        dispatch(updateCartItemsAction(newCart));
      } else {
        if (loggedinCart.length != 0) {
          const newCart = [...loggedinCart].map((item) => {
            return { productId: item.item._id, quantity: item.quantity };
          });
          newCart.push({
            productId: currentProduct._id,
            quantity: quantity,
          });

          dispatch(updateCartItemsAction(newCart));
        } else {
          console.log("adsfads");

          dispatch(
            updateCartItemsAction({
              productId: currentProduct.product_Id,
              quantity: quantity,
            })
          );
        }
      }
    }
  };

  //should ensure they only affect the local quantity state variable and not the cart state because if I use dispatch it will update the quantity when I incease or decrease without addToCart Function

  const handleIncreaseQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleDecreaseQuantity = () => {
    setQuantity((prevQuantity) => Math.max(prevQuantity - 1, 1));
  };

  if (!currentProduct) return <p>Product Not Found</p>;

  return (
    <div className="z-40 pb-[200px] relative bg-white items-center flex flex-col mb-10">
      <PageTitle title="Product" />
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
          <Typography className="mb-4 uppercase">
            {currentProduct.name}
          </Typography>
          <div className="mb-6">
            <StaticStarRating rating={currentProduct.rating || 4} />
          </div>
          <Typography className="mb-2">${currentProduct.price}</Typography>
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
