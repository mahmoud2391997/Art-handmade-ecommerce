import {
  DECREASE_ITEM_QUANTITY,
  FETCH_CARTITEMS,
  INCREASE_ITEM_QUANTITY,
  REMOVE_CARTITEM,
  UPDATE_CART_AMOUNT,
  UPDATE_CART_TOTAL,
  UPDATE_CARTITEMS,
} from "../actionTypes";

const initialState = {
  loggedinCart: [],
  total: 0,
  amount: 0,
};

export const loggedinCartReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CARTITEMS: {
      return {
        ...state,
        loggedinCart: action.payload.cartItems,
        total: action.payload.total,
        amount: action.payload.amount,
        status: "succeeded",
        loaded: true,
      };
    }
    case UPDATE_CARTITEMS: {
      return {
        ...state,
        loggedinCart: action.payload.cartItems,
        total: action.payload.total,
        amount: action.payload.amount,
        status: "succeeded",
        loaded: true,
      };
    }

    case INCREASE_ITEM_QUANTITY:
      return {
        ...state,
        cartItems: action.payload,
      };
    case DECREASE_ITEM_QUANTITY:
      return {
        ...state,
        cartItems: action.payload,
      };

    case UPDATE_CART_TOTAL:
      return {
        ...state,
        total: action.payload,
      };
    case UPDATE_CART_AMOUNT:
      return {
        ...state,
        amount: action.payload,
      };
    default:
      return state;
  }
};
