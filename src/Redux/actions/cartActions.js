import { ADD_TO_CART, UPDATE_PRODUCT_QUANITITY, REMOVE_PRODUCT_FROM_CART } from "../actionTypes";
import { addToCart, updateProductQuantity, removeProductFromCart} from '../api/productsAPI';


export const addToCartAction = (product) => async (dispatch) => {
    try {
        const res = await addToCart(product);
        dispatch({
            type: ADD_TO_CART,
            payload: res.data
        })
    } catch (error) {
        console.error('Error adding to cart:', error);
    }
}

export const updateProductQuantityAction = (id, quantity) => async ( dispatch) => {
    try {
        const res = await updateProductQuantity(id, quantity)
        dispatch({
            type: UPDATE_PRODUCT_QUANITITY,
            payload: {id, quantity: res.data.quantity}
        })
    } catch (error) {
        console.error('Error updating cart quantity:', error);
    }
}

export const removeProductFromCartAction = (id) => async (dispatch) => {
    try {
        await removeProductFromCart(id)
        dispatch({
            type: REMOVE_PRODUCT_FROM_CART,
            payload: id
        })
    } catch (error) {
        console.error('Error removing from cart:', error);
    }
}