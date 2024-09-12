import {
  FETCH_PRODUCTS,
  FETCH_PRODUCT_BY_ID,
  FETCH_BESTSELLERS_PRODUCTS,
} from "../actionTypes";

const initialState = {
  products: [],
  count: 0,
  status: "idle",
  error: null,
  currentProduct: null,
};

export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS: {
      console.log(action.payload);

      return {
        ...state,
        products: action.payload.products,
        count: action.payload.count,
        status: "succeeded",
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
