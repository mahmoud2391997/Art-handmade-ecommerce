import axios from "axios";

export const fetchProducts = async () => {
  try {
    const response = await axios.get(
      "https://art-ecommerce-server.glitch.me/api/products"
    );
    console.log(response);
    return response.data;
  } catch (error) {
    console.log("Error fetching products:", error);
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
    console.log("Error fetching product by ID:", error);
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
    console.log("Error fetching random products:", error);
    throw error;
  }
};
