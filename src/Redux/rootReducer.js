import { combineReducers } from "@reduxjs/toolkit";
import { productReducer } from "./Reducers/productsReducer";
import { cartReducer } from "./Reducers/cartReducer";
import { bestsellersReducer } from "./Reducers/bestSellersReducer";
import { loggedinCartReducer } from "./Reducers/loggedInCartReducer";
// import {contactReducer} from "./Reducers/contactReducer"


export const rootReducer = combineReducers({
  products: productReducer,
  cart: cartReducer,
  bestSellers: bestsellersReducer,
  loggedinCart: loggedinCartReducer,
  // contact: contactReducer,
});
