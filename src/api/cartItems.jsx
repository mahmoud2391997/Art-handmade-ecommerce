import axios from "axios";
export function getCartItems(token) {
  axios
    .get("https://art-server-puce.vercel.app/api/cartItems", {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
    .then((response) => console.log(response.data))
    .catch((error) => {
      console.error(error);
    });
}
// cartItemsArray=[
//   {
//     productId:,
//     quantity: Number
//   },{},{}
// ]
export function updateCartItems(cartItemsArray, token) {
  axios
    .post(
      `https://art-server-puce.vercel.app/api/cartItems`,
      cartItemsArray,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    )
    .then((response) => console.log(response.data))
    .catch((error) => {
      console.error(error);
    });
}
