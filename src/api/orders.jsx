import axios from "axios";
export function getOrders(token) {
  axios
    .get("https://art-server-puce.vercel.app/api/orders", {
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
    .post(`https://art-server-puce.vercel.app/api/orders`, orderDetails, {
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
    .put(`https://art-server-puce.vercel.app/api/orders/:id`, {
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
