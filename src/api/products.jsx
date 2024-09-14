import axios from "axios";

function getProducts(pageNumber) {
  axios
    .get(
      `https://art-ecommerce-server.glitch.me/api/products/pages/${pageNumber}`
    )
    .then((response) => {
      return response.data
    })
    .catch((error) => {
      throw error
    });
}

function getProduct(productId) {
  axios
    .get(`https://art-ecommerce-server.glitch.me/api/products/${productId}`)
    .then((response) => {
      return response.data
    })
    .catch((error) => {
      throw error
    });
}
export default async function searchProducts(product,page) {
  if (product == "") {
    getProducts(1)
  } else {

   const response = await axios
    .get(`https://art-ecommerce-server.glitch.me/api/product/search?searchTerm=${product}&numOfPages=${page}`)
   
    .catch((error) => {
      throw error
    });
    return response.data
  }
}
