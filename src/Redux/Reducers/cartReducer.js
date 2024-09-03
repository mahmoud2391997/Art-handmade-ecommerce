import { 
  ADD_TO_CART, 
  REMOVE_FROM_CART, 
  INCREASE_QUANTITY, 
  DECREASE_QUANTITY, 
  CLEAR_CART, 
  UPDATE_TOTAL, 
  UPDATE_AMOUNT 
} from '../actionTypes';

// Load initial cart state from localStorage
const initialState = {
  cartItems: JSON.parse(localStorage.getItem('cart')) || [],
  total: parseFloat(localStorage.getItem('total')) || 0,
  amount: parseFloat(localStorage.getItem('amount')) || 0,
};

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
    case REMOVE_FROM_CART:
    case INCREASE_QUANTITY:
    case DECREASE_QUANTITY:
      const updatedCartItems = action.payload;
      // Update cart items in localStorage
      localStorage.setItem('cart', JSON.stringify(updatedCartItems));
      return {
        ...state,
        cartItems: updatedCartItems,
      };
      
    case CLEAR_CART:
      // Clear cart items from localStorage
      localStorage.removeItem('cart');
      localStorage.removeItem('total');
      localStorage.removeItem('amount');
      return {
        ...state,
        cartItems: [],
        total: 0,
        amount: 0,
      };

    case UPDATE_TOTAL:
      const newTotal = action.payload;
      // Update total in localStorage
      localStorage.setItem('total', newTotal.toString());
      return {
        ...state,
        total: newTotal,
      };

    case UPDATE_AMOUNT:
      const newAmount = action.payload;
      // Update amount in localStorage
      localStorage.setItem('amount', newAmount.toString());
      return {
        ...state,
        amount: newAmount,
      };

    default:
      return state;
  }
};

export default cartReducer;
