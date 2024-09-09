import {
  FETCH_BESTSELLERS_PRODUCTS,
  FETCH_PRODUCTS,
  FETCH_PRODUCT_BY_ID,
} from "../actionTypes";
import {
  fetchProducts,
  fetchProductByID,
  fetchBestSellers,
  fetchProductsCount,
} from "../api/productsAPI";

export const fetchProductsAction = (page) => async (dispatch, getState) => {
  // Only fetch products if they haven't been loaded yet
  try {
    const products = await fetchProducts(page);
    const count = await fetchProductsCount();
    dispatch({
      type: FETCH_PRODUCTS,
      payload: { products: products, count: count },
    });
  } catch (error) {
    console.log("Error Fetching Products", error);
  }
};

export const fetchProductByIDAction = (productId) => async (dispatch) => {
  try {
    const product = await fetchProductByID(productId);
    dispatch({
      type: FETCH_PRODUCT_BY_ID,
      payload: product,
    });
  } catch (error) {
    console.log("Error Fetching Product", error);
  }
};

export const fetchBestSellersAction = () => async (dispatch) => {
  try {
    const bestsellers = await fetchBestSellers();
    dispatch({
      type: FETCH_BESTSELLERS_PRODUCTS,
      payload: bestsellers,
    });
  } catch (error) {
    console.log("Error Fetching BestSellers Products", error);
  }
};
