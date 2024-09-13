import axios from "axios";

function getProducts(pageNumber) {
  axios
    .get(
      `https://art-ecommerce-server.glitch.me/api/products/pages/${pageNumber}`
    )
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
export default async function searchProducts(product,page) {
  if (product == "") {
    getProducts(1)
  } else {

   const response = await axios
    .get(`https://art-ecommerce-server.glitch.me/api/product/search?searchTerm=${product}&numOfPages=${page}`)
   
    .catch((error) => {
      console.error(error);
    });
    return response.data
  }
}
