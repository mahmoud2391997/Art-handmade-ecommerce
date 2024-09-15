import searchProducts from "../../api/products";
import {
  FETCH_BESTSELLERS_PRODUCTS,
  FETCH_PRODUCTS,
  FETCH_PRODUCT_BY_ID,
  FETCH_SEARCHED_PRODUCTS,
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
    throw error
  }
};
export const fetchSearchedProductsAction = (searchTerm,page) => async (dispatch, getState) => {
  // Only fetch products if they haven't been loaded yet
  try {
    const products = await searchProducts(searchTerm,page);
    dispatch({
      type: FETCH_SEARCHED_PRODUCTS,
      payload: { products: products.searchedProducts, count: products.productsCount },
    });
  } catch (error) {
    throw error
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
    throw error
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
    throw error
  }
};
