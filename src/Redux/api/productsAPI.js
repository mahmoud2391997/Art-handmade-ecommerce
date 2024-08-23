import axios from "axios"


export const fetchProducts = async () => {
    try {
        const response = await axios.get('https://art-ecommerce-server.glitch.me/api/products');
        console.log(response)
        return response.data;
    } catch (error) {
        console.log('Error fetching products:', error);
        throw error; 
    }
};

export const fetchProductByID = async (productId) => {
    try {
        const response = await axios.get(`https://art-ecommerce-server.glitch.me/api/products/${productId}`)
        return response.data;
    } catch (error) {
        console.log('Error fetching product by ID:', error);
        throw error; 
    }
}  


// export const addToCart = async (product) => {
//     try {
//         const response = await axios.post('https://art-ecommerce-server.glitch.me/api/products', product);
//         return response.data;
//     } catch (error) {
//         console.log('Error adding to cart:', error);
//         throw error; 
//     }
// }

// export const updateProductQuantity = async (id, quantity) => {
//     try {
//         const response = await axios.put(`https://art-ecommerce-server.glitch.me/api/products/${id}`, { quantity });
//         return response.data; 
//     } catch (error) {
//         console.log('Error updating product quantity:', error);
//         throw error; 
//     }
// };


// export const removeProductFromCart = async (id) => {
//     try {
//         const response = await axios.delete(`https://art-ecommerce-server.glitch.me/api/products/${id}`);
//         return response.data; 
//     } catch (error) {
//         console.log('Error removing product from cart:', error);
//         throw error; 
//     }
// };

