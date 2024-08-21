import { FETCH_PRODUCTS } from "../actionTypes";
import { fetchProducts } from "../api/productsAPI";

export const fetchProductsAction = () => async (dispatch) => {
    try {
        const res = await fetchProducts()
        dispatch({
            type: FETCH_PRODUCTS,
            payload: res.data
        })
    } catch (error) {
        console.log('Error Fetching Products', error)
    }
}

