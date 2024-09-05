import {
  FETCH_PRODUCTS,
  FETCH_PRODUCT_BY_ID,
  FETCH_BESTSELLERS_PRODUCTS,
} from "../actionTypes";

const initialState = {
  products: [],
  status: "idle",
  error: null,
  currentProduct: null,
  loaded: false,
};

export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS: {
      return {
        ...state,
        products: action.payload,
        status: "succeeded",
        loaded: true,
      };
    }

    case FETCH_PRODUCT_BY_ID: {
      return {
        ...state,
        currentProduct: action.payload,
        status: "succeeded",
      };
    }

    default:
      return state;
  }
};
