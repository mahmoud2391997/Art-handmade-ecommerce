import { useSelector } from "react-redux";

export default function CheckOutCart() {
    const cartItems = useSelector((state) => state.cart.cartItems || []);

    // Calculate subtotal
    const calculateSubtotal = (items) => {
        return items.reduce((acc, item) => acc + item.price * item.quantity, 0);
    };

    const subtotal = calculateSubtotal(cartItems);
    const shippingCost = 50;
    const total = subtotal + shippingCost;

    return (
        <>
            <div className="bg-transparent p-4 rounded-md">
                <h3 className="text-lg font-semibold mb-4 text-center capitalize">Order Summary</h3>
                <table className="w-full border-separate border-spacing-0">
                    <thead>
                        <tr>
                            <th className="text-left pb-2 border-b border-gray-300">Product</th>
                            <th className="text-right pb-2 border-b border-gray-300">Subtotal</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cartItems.map((item) => (
                            <tr key={item._id} className="max-h-screen overflow-y-scroll">
                                <td className="py-6 border-b border-gray-300">{item.name} × {item.quantity}</td>
                                <td className="py-6 text-right border-b border-gray-300">${(item.price * item.quantity)}</td>
                            </tr>
                        ))}
                        <tr>
                            <td className="py-6 font-semibold border-t border-gray-300">Subtotal</td>
                            <td className="py-6 font-semibold text-right border-t border-gray-300">${subtotal}</td>
                        </tr>
                        <tr>
                            <td className="py-6 font-semibold border-t border-gray-300">Shipping</td>
                            <td className="py-6 font-semibold text-right border-t border-gray-300">
                                <p className='text-gray-700'>${shippingCost}</p>
                            </td>
                        </tr>
                        <tr>
                            <td className="pt-6 font-semibold border-t border-gray-300">Total</td>
                            <td className="pt-6 font-semibold text-right border-t border-gray-300">${total}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
}
