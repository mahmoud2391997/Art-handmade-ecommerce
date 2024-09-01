import { FETCH_PRODUCTS, FETCH_PRODUCT_BY_ID, FETCH_RANDOM_PRODUCTS } from "../actionTypes";
import { fetchProducts, fetchProductByID, fetchRandomProducts } from "../api/productsAPI";

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

export const fetchProductByIDAction = (productId) => async (dispatch, getState) => {
    // Check if the product is already in local storage
    const storedProduct = localStorage.getItem(`product_${productId}`);
    
    if (storedProduct) {
        // If found in local storage, parse it and dispatch it to Redux
        const product = JSON.parse(storedProduct);
        dispatch({
            type: FETCH_PRODUCT_BY_ID,
            payload: product,
        });
        return;
    }

    // If not found in local storage, check Redux state
    const { products } = getState().products;
    const existingProduct = products.find((product) => product._id === productId);

    if (existingProduct) {
        // If found in Redux state, dispatch it to Redux
        dispatch({
            type: FETCH_PRODUCT_BY_ID,
            payload: existingProduct,
        });
        //  update local storage as well
        localStorage.setItem(`product_${productId}`, JSON.stringify(existingProduct));
        return; 
    }

    // If not found in either, fetch from the API
    try {
        const product = await fetchProductByID(productId);
        // Store the fetched product in local storage
        localStorage.setItem(`product_${productId}`, JSON.stringify(product));
        // Dispatch the fetched product to Redux
        dispatch({
            type: FETCH_PRODUCT_BY_ID,
            payload: product,
        });
    } catch (error) {
        console.log('Error Fetching Product', error);
    }
};


export const fetchRandomProductsAction = () => async (dispatch) => {
    try {
        const randomProducts = await fetchRandomProducts();
        dispatch({
            type: FETCH_RANDOM_PRODUCTS,
            payload: randomProducts,
        });
    } catch (error) {
        console.log('Error Fetching Random Products', error);
    }
}

