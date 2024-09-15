import axios from "axios";

export const fetchProducts = async (page) => {

  try {
    const response = await axios.get(
      `https://art-ecommerce-server.glitch.me/api/products/pages/${page}`
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};
export const fetchProductsCount = async () => {
  try {
    const response = await axios.get(
      `https://art-ecommerce-server.glitch.me/api/products/count`
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};
export const fetchProductByID = async (productId) => {
  try {
    const response = await axios.get(
      `https://art-ecommerce-server.glitch.me/api/products/${productId}`
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const fetchBestSellers = async () => {
  try {
    const response = await axios.get(
      "https://art-ecommerce-server.glitch.me/api/products/bestsellers"
    );
    const products = response.data;

    return products;
  } catch (error) {
    throw error;
  }
};
