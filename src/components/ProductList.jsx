// eslint-disable-next-line no-unused-vars
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductsAction } from "../Redux/actions/productActions";
import { addToCart } from "../Redux/actions/cartActions";
import { Link } from "react-router-dom";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
  Tooltip,
} from "@material-tailwind/react";

const ProductList = () => {
  const dispatch = useDispatch();
  const { products, status, error } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProductsAction());
  }, []);

  const handleAddToCart = (product) => {
    console.log("Adding to cart", product);
    dispatch(addToCart(product));
  };

  if (status === "loading") return <p>Loading...</p>;
  if (status === "failed") return <p>{error}</p>;

  return (
    // <div className="relative z-40 w-full bg-white  ">

    <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pb-[50px] bg-white">
      {products.map((product) => (
        <Card
          key={product._id}
          className="max-w-sm shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out "
        >
          <CardHeader
            color="blue-gray"
            className="relative h-56 rounded-t-lg overflow-hidden"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover transition-transform duration-300 ease-in-out transform hover:scale-105"
            />
          </CardHeader>
          <CardBody>
            <Typography variant="h5" className="font-bold mb-2">
              {product.name}
            </Typography>
            <Typography variant="small" className="text-gray-600 mb-4">
              {product.description}
            </Typography>
            <Typography className="text-lg font-semibold mt-4">
              ${product.price}
            </Typography>
            <Typography variant="small" className="text-gray-500 mt-2">
              In Stock: {product.stock}
            </Typography>
            <Typography variant="small" className="text-gray-500 mt-2">
              Category: {product.category}
            </Typography>
            <Typography variant="small" className="text-gray-500 mt-2">
              Status: {product.status}
            </Typography>
          </CardBody>
          <CardFooter className="flex justify-between items-center">
            <Tooltip content="Add to Cart">
              <Button
                onClick={() => handleAddToCart(product)}
                color="blue"
                className="mr-2"
              >
                Add to Cart
              </Button>
            </Tooltip>
            <Link to={`/products/${product._id}`}>
              <Button variant="outlined" onClick={() => console.log(product)}>
                More
              </Button>
            </Link>
          </CardFooter>
        </Card>
      ))}
    </div>
    // </div>
  );
};

export default ProductList;
