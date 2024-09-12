import { FETCH_BESTSELLERS_PRODUCTS } from "../actionTypes";
import { fetchBestSellers } from "../api/productsAPI";
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
