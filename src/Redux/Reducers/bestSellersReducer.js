import { FETCH_BESTSELLERS_PRODUCTS } from "../actionTypes";

const initialState = {
  bestSellers: [],
  status: "idle",
  error: null,
  currentProduct: null,
  loaded: false,
};

export const bestsellersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_BESTSELLERS_PRODUCTS: {
      return {
        ...state,
        bestSellers: action.payload,
        status: "succeeded",
        loaded: true,
      };
    }

    default:
      return state;
  }
};
