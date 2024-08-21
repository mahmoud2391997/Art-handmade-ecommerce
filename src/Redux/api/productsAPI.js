import { axiosInstance } from "./axiosInstance";

export const fetchProducts = async () => {
    return await axiosInstance.get('/products')
}

export const addToCart = async (product) => {
    return await axiosInstance.post('/cart', product)
}

export const updateProductQuantity = async (id, quantity) => {
    return await axiosInstance.put(`/cart/${id}`, {quantity})
}

export const removeProductFromCart = async (id) => {
    return await axiosInstance.delete(`/cart/${id}`)
}