import StaticStarRating from "../components/staticStarRating";
import MainButton from "./MainButton";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchProductsAction,
  fetchRandomProductsAction,
} from "../Redux/actions/productActions";
import { addToCart } from "../Redux/actions/cartActions";
import { useNavigate } from "react-router-dom";
import { Card, CardBody } from "@material-tailwind/react";
import { toast, Bounce } from "react-toastify";

export default function ProductCard({ isRandom }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { products, status, error } = useSelector((state) => state.products);

  useEffect(() => {
    if (isRandom) {
      dispatch(fetchRandomProductsAction());
    } else {
      dispatch(fetchProductsAction());
    }
  }, [dispatch, isRandom]);

  const handleAddToCart = (product) => {
    console.log("Adding to cart", product);
    const defaultQuantity = 1;
    dispatch(addToCart(product, defaultQuantity));
  };

  if (status === "loading") return <p>Loading...</p>;
  if (status === "failed") return <p>{error}</p>;

  console.log(products.length);
  return (
    <div className="relative p-4 mb-7 grid grid-cols-1 lg:grid-cols-3 gap-[10rem]">
      {products.map((product) => (
        <Card
          key={product._id}
          className="relative flex flex-col items-center group rounded-none"
        >
          {console.log(product)}
          <div className="relative xl:w-60 w-60 h-60 sm:w-48 sm:h-48 xl:h-60 mb-4 overflow-hidden">
            <img
              src={product.image}
              className="h-full w-full object-cover"
              alt={product.name}
            />
            <div className="absolute top-3 left-3 right-3 bottom-3 bg-white bg-opacity-100 flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-x-full transition-transform duration-[2000ms] ease-in-out group-hover:translate-x-0">
              <MainButton
                title="Add to Cart"
                className="items-center justify-center flex"
                onClick={() => {
                  handleAddToCart(product);
                  toast.success("Product added to the cart", {
                    position: "top-center",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    transition: Bounce,
                  });
                }}
              />
            </div>
          </div>
          <CardBody className="xl:w-60 w-full sm:w-56 h-24 xl:h-[124px] flex flex-col items-center justify-around ">
            <h5
              className="sm:text-xl font-eb-garamond text-base leading-5 tracking-[0.14em] cursor-pointer"
              onClick={() => navigate(`/products/${product._id}`)}
            >
              {product.name}
            </h5>
            <div className="w-2/3 flex justify-center">
              <StaticStarRating rating={product.rating || 3} />
            </div>
            <div className="w-full tracking-[0.16em] leading-5 sm:text-l text-base text-center">
              <span>{product.price}$</span>
            </div>
          </CardBody>
        </Card>
      ))}
    </div>
  );
}
