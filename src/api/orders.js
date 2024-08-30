function getOrders(token) {
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
