import axios from "axios";
import loadStorage from "../../helpers/Storage";

// cartItemsArray=[
//   {
//     productId:,
//     quantity: Number
//   },{},{}
// ]
export const updateCartItems = async (cartItemsArray) => {
  console.log(cartItemsArray);

  try {
    await axios.post(
      `https://art-ecommerce-server.glitch.me/api/cartItems`,
      cartItemsArray,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${loadStorage()}`,
        },
      }
    );
  } catch (error) {
    console.error(error);
  }
};
export const getCartItems = async () => {
  try {
    let response = await axios.get(
      "https://art-ecommerce-server.glitch.me/api/cartItems",
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${loadStorage()}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
