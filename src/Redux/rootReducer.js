import { combineReducers } from "@reduxjs/toolkit";
import { productReducer } from "./Reducers/productsReducer";
import { cartReducer } from "./Reducers/cartReducer";
import { bestsellersReducer } from "./Reducers/bestSellersReducer";

export const rootReducer = combineReducers({
  products: productReducer,
  cart: cartReducer,
  bestSellers: bestsellersReducer,
});
