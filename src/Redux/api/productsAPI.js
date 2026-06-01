import { dummyProducts, getProductById, simulateDelay } from "../../api/dummyData";

export const fetchProducts = async (page) => {
  try {
    await simulateDelay(300);
    const startIndex = (page - 1) * 5;
    const endIndex = startIndex + 5;
    return dummyProducts.slice(startIndex, endIndex);
  } catch (error) {
    throw error;
  }
};

export const fetchProductsCount = async () => {
  try {
    await simulateDelay(300);
    return dummyProducts.length;
  } catch (error) {
    throw error;
  }
};

export const fetchProductByID = async (productId) => {
  try {
    await simulateDelay(300);
    return getProductById(productId);
  } catch (error) {
    throw error;
  }
};

export const fetchBestSellers = async () => {
  try {
    await simulateDelay(300);
    // Return top 3 products as best sellers
    return dummyProducts.slice(0, 3);
  } catch (error) {
    throw error;
  }
};
