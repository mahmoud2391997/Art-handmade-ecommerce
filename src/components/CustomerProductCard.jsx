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
import {
  fetchCartItemsAction,
  updateCartItemsAction,
} from "../Redux/actions/loggedInCartActions";

export default function ProductCard() {
  const dispatch = useDispatch();

  const { bestSellers, status, error } = useSelector(
    (state) => state.bestSellers
  );
  console.log(useSelector((state) => state.bestSellers));
  console.log(useSelector((state) => state.loggedinCart));
  const { loggedinCart } = useSelector((state) => state.loggedinCart);
  console.log(loggedinCart);

  useEffect(() => {
    dispatch(fetchBestSellersAction());
  }, [dispatch]);

  const handleAddToCart = (product) => {
    if (!sessionStorage.getItem("token") && !localStorage.getItem("token")) {
      console.log("Adding to cart", product);
      const defaultQuantity = 1;
      dispatch(addToCart(product, defaultQuantity));
    } else {
      console.log(loggedinCart);
      console.log(
        [...loggedinCart].filter((item) => item.item._id == product.product_Id)
          .length
      );

      if (
        [...loggedinCart].filter(
          (item) => item.item._id == product.product_Id
        ) != 0
      ) {
        const newCart = [...loggedinCart].map((item) => {
          console.log(item);
          console.log(product._id);

          if (item.item._id == product.product_Id) {
            return { productId: item.item._id, quantity: item.quantity + 1 };
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
          newCart.push({ productId: product.product_Id, quantity: 1 });

          dispatch(updateCartItemsAction(newCart));
        } else {
          console.log("adsfads");

          dispatch(
            updateCartItemsAction({
              productId: product.product_Id,
              quantity: 1,
            })
          );
        }
      }
    }
  };

  if (status === "loading") return <p>Loading...</p>;
  if (status === "failed") return <p>{error}</p>;

  return (
    <div className="relative p-2 mb-7 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-[7rem] ">
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
