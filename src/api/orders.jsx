import axios from "axios";
export function getOrders(token) {
  axios
    .get("https://art-ecommerce-server.glitch.me/api/orders", {
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
// {
//   customerName:,
//   customerEmail:,
//   customerPhone:,
//   customerAddress:,
//   paymentMethod:,
//   orderItems:[
//     {
// productName:,
// productPrice: Number
// productQuantity: Number
// productImageUrl:
//},{},{}
//   ]
// }
function makeOrder(orderDetails, token) {
  axios
    .post(`https://art-ecommerce-server.glitch.me/api/orders`, orderDetails, {
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
function cancelOrder(orderId, token) {
  axios
    .put(`https://art-ecommerce-server.glitch.me/api/order/:id`, {
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
