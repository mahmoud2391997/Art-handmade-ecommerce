function getCustomerInfo(token) {
  axios
    .get(`https://art-ecommerce-server.glitch.me/api/customer`, {
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
