import StaticStarRating from "./staticStarRating";
import MainButton from "./MainButton";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductsAction } from "../Redux/actions/productActions";
import { addToCart } from "../Redux/actions/cartActions";
import { useNavigate } from "react-router-dom";
import { Card, CardBody } from "@material-tailwind/react";
import SingleProductCard from "./Shared/SingleProductCard";
import { updateCartItemsAction } from "../Redux/actions/loggedInCartActions";

export default function ProductList({ currentProducts }) {
  // const navigate = useNavigate();

  const dispatch = useDispatch();
  const { loggedinCart } = useSelector((state) => state.loggedinCart);

  const handleAddToCart = (product) => {
    if (!sessionStorage.getItem("token")) {
      const defaultQuantity = 1;
      dispatch(addToCart(product, defaultQuantity));
    } else {

      if (
        [...loggedinCart].filter((item) => item.item._id == product._id) != 0
      ) {
        const newCart = [...loggedinCart].map((item) => {
          if (item.item._id == product._id) {
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
          newCart.push({ productId: product._id, quantity: 1 });

          dispatch(updateCartItemsAction(newCart));
        } else {

          dispatch(
            updateCartItemsAction({ productId: product._id, quantity: 1 })
          );
        }
      }
    }
  };

  return (
    <div className="relative p-2 mb-7 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-[7rem]">
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
