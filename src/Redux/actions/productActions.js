import { FETCH_PRODUCTS, FETCH_PRODUCT_BY_ID } from "../actionTypes";
import { fetchProducts, fetchProductByID } from "../api/productsAPI";

export const fetchProductsAction = () => async (dispatch, getState) => {
    const { loaded } = getState().products;

    // Only fetch products if they haven't been loaded yet
    if (!loaded) {
        try {
            const products = await fetchProducts();
            dispatch({
                type: FETCH_PRODUCTS,
                payload: products,
            });
        } catch (error) {
            console.log('Error Fetching Products', error);
        }
    }
};

export const fetchProductByIDAction = (productId) => async (dispatch) => {
    try {
        console.log("Fetching product with ID:", productId);
        const product = await fetchProductByID(productId);
        dispatch({
            type: FETCH_PRODUCT_BY_ID,
            payload: product,
        });
    } catch (error) {
        console.log('Error Fetching Product', error);
    }
};
