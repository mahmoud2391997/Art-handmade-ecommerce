import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
  clearCart
} from '../Redux/actions/cartActions';
import { Button } from '@material-tailwind/react';

export default function Cart() {
  const dispatch = useDispatch();

  // Ensure the state structure matches the selector
  const cartItems = useSelector((state) => state.cart.cartItems || []);
  const total = useSelector((state) => state.cart.total || 0);

  return (
    <div className="p-8 max-w-4xl mx-auto bg-white shadow-md rounded-lg">
      <h2 className="text-3xl font-bold mb-6">Your Cart</h2>
      {cartItems.length === 0 ? (
        <p className="text-center text-gray-500">Your cart is empty</p>
      ) : (
        <div>
          {cartItems.map((item) => (
            <div key={item._id} className="flex items-center justify-between border-b border-gray-200 py-4">
              <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded" />
              <div className="flex-1 ml-4">
                <h4 className="text-xl font-semibold">{item.name}</h4>
                <p className="text-gray-600">Price: ${item.price}</p>
                <div className="flex items-center mt-2">
                  <Button 
                    size="sm" 
                    color="blue" 
                    onClick={() => dispatch(increaseQuantity(item._id))} 
                    className="mr-2"
                  >
                    +
                  </Button>
                  <p className="text-gray-600">{item.quantity}</p>
                  <Button 
                    size="sm" 
                    color="red" 
                    onClick={() => dispatch(decreaseQuantity(item._id))} 
                    className="ml-2"
                  >
                    -
                  </Button>
                </div>
              </div>
              <Button 
                size="sm" 
                color="red" 
                onClick={() => dispatch(removeFromCart(item._id))}
              >
                Remove
              </Button>
            </div>
          ))}
          <div className="mt-6 flex justify-between items-center font-bold">
            <span>Total:</span>
            <span>${total}</span>
          </div>
          <Button 
            size="lg" 
            color="red" 
            onClick={() => dispatch(clearCart())} 
            className="mt-6 w-full"
          >
            Clear Cart
          </Button>
        </div>
      )}
    </div>
  );
}
