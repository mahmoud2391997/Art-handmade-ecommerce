function getCustomerInfo(token) {
  axios
    .get(`https://art-ecommerce-server.glitch.me/api/customer`, {
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
