import { getCartItems, updateCartItems } from "../api/loggedInCartAPI";
import {
  DECREASE_ITEM_QUANTITY,
  FETCH_CARTITEMS,
  INCREASE_ITEM_QUANTITY,
  REMOVE_CARTITEM,
  UPDATE_CART_AMOUNT,
  UPDATE_CART_TOTAL,
  UPDATE_CARTITEMS,
} from "../actionTypes";
export const fetchCartItemsAction = () => async (dispatch) => {
  try {
    const cartItems = await getCartItems();
    console.log(cartItems);
    const storageCart = sessionStorage.getItem("cart")
      ? JSON.parse(sessionStorage.getItem("cart")).map((item) => {
          return { item: { ...item }, quantity: item.quantity };
        })
      : null;
    if (storageCart) {
      const mergedCarts = [...cartItems, ...storageCart];

      const mergedCartWithTotalQuantity = mergedCarts.reduce((acc, curr) => {
        const existingItem = acc.find(
          (item) => item.item._id === curr.item._id
        );

        if (existingItem) {
          existingItem.quantity += curr.quantity;
        } else {
          acc.push(curr);
        }

        return acc;
      }, []);

      console.log(mergedCartWithTotalQuantity);

      const total = mergedCartWithTotalQuantity.reduce(
        (acc, item) => acc + item.item.price * item.quantity,
        0
      );
      const amount = mergedCartWithTotalQuantity.reduce(
        (acc, item) => acc + item.quantity,
        0
      );
      dispatch({
        type: FETCH_CARTITEMS,
        payload: {
          cartItems: mergedCartWithTotalQuantity,
          total: total,
          amount: amount,
        },
      });
      updateCartItems(
        mergedCartWithTotalQuantity.map((item) => {
          return { productId: item.item._id, quantity: item.quantity };
        })
      );
    } 
    sessionStorage.removeItem("cart");

  } catch (error) {
    console.log("Error Fetching Cart Items", error);
  }
};
export const updateCartItemsAction = (updatedCart) => async (dispatch) => {
  try {
    console.log(updatedCart);

    await updateCartItems(updatedCart);
    const cartItems = await getCartItems();
    console.log(cartItems);

    const total = cartItems.reduce(
      (acc, item) => acc + item.item.price * item.quantity,
      0
    );
    const amount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

    dispatch({
      type: UPDATE_CARTITEMS,
      payload: { cartItems: cartItems, total: total, amount: amount },
    });
  } catch (error) {
    console.log("Error Fetching Cart Items", error);
  }
};
export const removeCartItem = (productId) => (dispatch, getState) => {
  const { loggedinCart } = getState().loggedinCart;
  const Cart = loggedinCart.filter((item) => item.item._id !== productId);
  const updatedCart = Cart.map((item) => {
    return { productId: item.item._id, quantity: item.quantity };
  });

  dispatch(updateCartItemsAction(updatedCart));
};

export const increaseItemQuantity = (productId) => (dispatch, getState) => {
  const { loggedinCart } = getState().loggedinCart;
  console.log(loggedinCart);

  const updatedCart = loggedinCart.map((item) =>
    item.item._id === productId
      ? { productId: item.item._id, quantity: item.quantity + 1 }
      : { productId: item.item._id, quantity: item.quantity }
  );

  dispatch(updateCartItemsAction(updatedCart));
};

export const decreaseItemQuantity = (productId) => (dispatch, getState) => {
  const { loggedinCart } = getState().loggedinCart;
  const updatedCart = loggedinCart.map((item) =>
    item.item._id === productId
      ? { productId: item.item._id, quantity: Math.max(item.quantity - 1, 1) }
      : { productId: item.item._id, quantity: item.quantity }
  );

  dispatch(updateCartItemsAction(updatedCart));
};
// export const updateCartTotal = (cartItems) => {
//   const total = cartItems.reduce(
//     (acc, item) => acc + item.item.price * item.quantity,
//     0
//   );
//   const amount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

//   return (dispatch) => {
//     dispatch({
//       type: UPDATE_CART_TOTAL,
//       payload: total,
//     });
//     dispatch({
//       type: UPDATE_CART_AMOUNT,
//       payload: amount,
//     });
//   };
// };
