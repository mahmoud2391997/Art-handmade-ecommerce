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

function addProduct(product) {
  axios
    .post(`https://art-ecommerce-server.glitch.me/api/products`, product)
    .then((response) => console.log(response.data))
    .catch((error) => {
      console.error(error);
    });
}

function editProduct(productId, editedProduct) {
  axios
    .post(
      `https://art-ecommerce-server.glitch.me/api/products/${productId}`,
      editedProduct
    )
    .then((response) => console.log(response.data))
    .catch((error) => {
      console.error(error);
    });
}

function deleteProduct(productId) {
  axios
    .delete(`https://art-ecommerce-server.glitch.me/api/products/${productId}`)
    .then((response) => console.log(response.data))
    .catch((error) => {
      console.error(error);
    });
}
