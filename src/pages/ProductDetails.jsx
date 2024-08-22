import React, { useEffect, useState } from 'react';  
import { useParams } from 'react-router-dom';  
import { addToCartAction } from '../Redux/actions/cartActions';
import { fetchProductByIDAction } from '../redux/actions/productActions';
import { useDispatch, useSelector } from 'react-redux';  
import { Card, Typography, Button } from '@material-tailwind/react';  

export default function ProductDetails() {  
  const { productId } = useParams(); // Get the product ID from the URL  
  const dispatch = useDispatch();  
  const [product, setProduct] = useState(null);  
  const products = useSelector((state) => state.products.products); // Access products from the state
  const currentProduct = useSelector((state) => state.products.currentProduct); // Access currentProduct from the state

  useEffect(() => {  
    // Check if product exists in state and fetch if not  
    const existingProduct = products.find(product => product._id === productId);  
    
    if (existingProduct) {  
      setProduct(existingProduct); // If it exists, set it to state  
    } else {  
      // If not found in Redux state, dispatch the action to fetch it  
      dispatch(fetchProductByIDAction(productId));  
    }  
  }, [productId, products, dispatch]);  

  // Update the product state once the product is fetched
  useEffect(() => {  
    if (currentProduct && currentProduct._id === productId) {  
      setProduct(currentProduct);  
    }  
  }, [currentProduct, productId]);  

  if (!product) return <p>Loading...</p>;  

  return (  
    <div className="container mx-auto p-4">  
      <Card className="max-w-lg mx-auto mb-5 p-4">  
        <img   
          src={product.image}   
          alt={product.name}   
          className="w-full h-60 object-cover mb-4"   
        />  
        <Typography variant="h4" className="font-bold mb-2">{product.name}</Typography>  
        <Typography variant="h6" className="text-gray-700 mb-4">${product.price}</Typography>  
        <Typography variant="small">{product.description}</Typography>  
        <div className="mt-4">  
          <Button   
            color="blue"   
            onClick={() => dispatch(addToCartAction(product))}  
          >  
            Add to Cart  
          </Button>  
        </div>  
      </Card>  
    </div>  
  );  
}
