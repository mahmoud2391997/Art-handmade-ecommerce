function getCategories() {
  axios
    .get("https://art-ecommerce-server.glitch.me/api/categories")
    .then((response) => console.log(response.data))
    .catch((error) => {
      console.error(error);
    });
}
