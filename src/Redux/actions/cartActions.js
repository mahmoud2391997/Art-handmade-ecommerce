// actions/cartActions.js
import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  INCREASE_QUANTITY,
  DECREASE_QUANTITY,
  CLEAR_CART,
  UPDATE_TOTAL,
  UPDATE_AMOUNT,
} from "../actionTypes";

export const addToCart = (product, quantity) => (dispatch, getState) => {
  const { cartItems } = getState().cart;
  const existingProduct = cartItems.find((item) => item._id === product._id);

  let updatedCart;
  if (existingProduct) {
    updatedCart = cartItems.map((item) =>
      item._id === product._id ? { ...item, quantity: item.quantity + quantity } : item
    );
  } else {
    updatedCart = [...cartItems, { ...product, quantity }];
  }

  dispatch({
    type: ADD_TO_CART,
    payload: updatedCart,
  });
  dispatch(updateTotal(updatedCart));
};

export const removeFromCart = (productId) => (dispatch, getState) => {
  const { cartItems } = getState().cart;
  const updatedCart = cartItems.filter((item) => item._id !== productId);

  dispatch({
    type: REMOVE_FROM_CART,
    payload: updatedCart,
  });
  dispatch(updateTotal(updatedCart));
};

export const increaseQuantity = (productId) => (dispatch, getState) => {
  const { cartItems } = getState().cart;
  const updatedCart = cartItems.map((item) =>
    item._id === productId ? { ...item, quantity: item.quantity + 1 } : item
  );

  dispatch({
    type: INCREASE_QUANTITY,
    payload: updatedCart,
  });
  dispatch(updateTotal(updatedCart));
};

export const decreaseQuantity = (productId) => (dispatch, getState) => {
  const { cartItems } = getState().cart;
  const updatedCart = cartItems.map((item) =>
    item._id === productId
      ? { ...item, quantity: Math.max(item.quantity - 1, 1) }
      : item
  );

  dispatch({
    type: DECREASE_QUANTITY,
    payload: updatedCart,
  });
  dispatch(updateTotal(updatedCart));
};

export const clearCart = () => (dispatch) => {
  dispatch({
    type: CLEAR_CART,
    payload: [],
  });
  dispatch(updateTotal([]));
};

export const updateTotal = (cartItems) => {
  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const amount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (dispatch) => {
    dispatch({
      type: UPDATE_TOTAL,
      payload: total,
    });
    dispatch({
      type: UPDATE_AMOUNT,
      payload: amount,
    });
    localStorage.setItem("cart", JSON.stringify(cartItems));
    localStorage.setItem("total", total.toString());
  };
};
