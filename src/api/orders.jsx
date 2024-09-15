import axios from "axios";
export function getOrders(token) {
  axios
    .get("https://art-ecommerce-server.glitch.me/api/orders", {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
    .then((response) => {
      return response.data
    })
    .catch((error) => {
      throw error
    });
}

export function makeOrder(orderDetails, token) {
  axios
    .post(`https://art-ecommerce-server.glitch.me/api/orders`, orderDetails, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
    .then((response) => {
      return response.data
    })
    .catch((error) => {
      throw error
    });
}
function cancelOrder(orderId, token) {
  axios
    .put(`https://art-ecommerce-server.glitch.me/api/orders/:id`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
    .then((response) => {
      return response.data
    })
    .catch((error) => {
      throw error
    });
}
