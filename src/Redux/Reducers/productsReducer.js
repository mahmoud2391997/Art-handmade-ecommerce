import { FETCH_PRODUCTS } from "../actionTypes";

const initialState = {
    products: [],
    status: 'idle',
    error: null
}


export const productReducer = ( state = initialState, action) => {
    switch (action.type){
        case FETCH_PRODUCTS:{
            return {
                ...state,
                products: action.payload,
                status: 'succeeded'
            }
        }

        default:
            return state;
    }
}