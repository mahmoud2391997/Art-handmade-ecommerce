import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateProductQuantityAction, removeProductFromCartAction } from '../redux/actions/cartActions'; // Adjust the path as necessary

const Cart = () => {
const dispatch = useDispatch();
const cartItems = useSelector(state => state.cart.cartItems);

const handleUpdateQuantity = (id, quantity) => {
    dispatch(updateProductQuantityAction(id, quantity));
};

const handleRemoveFromCart = (id) => {
    dispatch(removeProductFromCartAction(id));
};

return (
    <div>
    <h2>Your Cart</h2>
    {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
    ) : (
        cartItems.map(item => (
        <div key={item.id} className="cart-item">
            <h4>{item.name}</h4>
            <p>Price: {item.price}</p>
            <p>Quantity: {item.quantity}</p>
            <button onClick={() => handleUpdateQuantity(item.id, item.quantity + 1)}>+</button>
            <button onClick={() => handleUpdateQuantity(item.id, item.quantity - 1)}>-</button>
            <button onClick={() => handleRemoveFromCart(item.id)}>Remove</button>
        </div>
        ))
    )}
    </div>
);
};

export default Cart;
