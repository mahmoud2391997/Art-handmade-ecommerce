// reducers/cartReducer.js
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
  amount: 0
};

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        cartItems: action.payload
      };
    case REMOVE_FROM_CART:
      return {
        ...state,
        cartItems: action.payload
      };
    case INCREASE_QUANTITY:
      return {
        ...state,
        cartItems: action.payload
      };
    case DECREASE_QUANTITY:
      return {
        ...state,
        cartItems: action.payload
      };
    case CLEAR_CART:
      return {
        ...state,
        cartItems: action.payload
      };
    case UPDATE_TOTAL:
      return {
        ...state,
        total: action.payload
      };
    case UPDATE_AMOUNT:
      return {
        ...state,
        amount: action.payload
      };
    default:
      return state;
  }
};

export default cartReducer;
