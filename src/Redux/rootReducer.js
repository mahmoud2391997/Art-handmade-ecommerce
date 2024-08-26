import { combineReducers } from "@reduxjs/toolkit";
import { productReducer } from "./Reducers/productsReducer";
import { cartReducer } from "./Reducers/cartReducer";

export const rootReducer = combineReducers({
    products: productReducer,
    cart: cartReducer,
})