function getProducts() {
  axios
    .get("https://art-ecommerce-server.glitch.me/api/products")
    .then((response) => console.log(response.data))
    .catch((error) => {
      console.error(error);
    });
}

function getProduct(productId) {
  axios
    .get(`https://art-ecommerce-server.glitch.me/api/products/${productId}`)
    .then((response) => console.log(response.data))
    .catch((error) => {
      console.error(error);
    });
}
