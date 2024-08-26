function getOrders() {
  axios
    .get("https://art-ecommerce-server.glitch.me/api/orders")
    .then((response) => console.log(response.data))
    .catch((error) => {
      console.error(error);
    });
}
function getOrder(orderId) {
  axios
    .get(`https://art-ecommerce-server.glitch.me/api/orders/${orderId}`)
    .then((response) => console.log(response.data))
    .catch((error) => {
      console.error(error);
    });
}
function makeOrder(orderDetails) {
  axios
    .post(`https://art-ecommerce-server.glitch.me/api/orders`, orderDetails)
    .then((response) => console.log(response.data))
    .catch((error) => {
      console.error(error);
    });
}
function updateOrderStatus(orderId, newStatus) {
  axios
    .put(
      `https://art-ecommerce-server.glitch.me/api/orders/${orderId}`,
      newStatus
    )
    .then((response) => console.log(response.data))
    .catch((error) => {
      console.error(error);
    });
}
