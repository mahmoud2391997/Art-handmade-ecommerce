import { useSelector } from "react-redux";

export default function CheckOutCart() {
  const cartItems = useSelector(
    (state) => state.loggedinCart.loggedinCart || []
  );

  // Calculate subtotal
  const calculateSubtotal = (items) => {
    return items.reduce(
      (acc, item) => acc + item.item.price * item.quantity,
      0
    );
  };

  const subtotal = calculateSubtotal(cartItems);
  const shippingCost = 50;
  const total = subtotal + shippingCost;

  return (
    <div className="bg-transparent p-4 rounded-md shadow-md">
      <h3 className="text-lg font-semibold mb-4 text-center capitalize">
        Order Summary
      </h3>
      <table className="w-full border-separate border-spacing-0">
        <thead>
          <tr>
            <th className="px-3 text-left pb-2 border-b border-gray-300">
              Product
            </th>
            <th className="px-3 text-right pb-2 border-b border-gray-300">
              Subtotal
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td colSpan="2" className="p-0">
              <div className="max-h-64 overflow-y-auto custom-scrollbar p-3">
                <table className="w-full border-separate border-spacing-0">
                  <tbody>
                    {cartItems.map((item) => (
                      <tr
                        key={item.item._id}
                        className="w-full border-b border-gray-300"
                      >
                        <td className="py-6">
                          {item.item.name} × {item.quantity}
                        </td>
                        <td className="py-6 text-right">
                          ${(item.item.price * item.quantity).toFixed(2)}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td className="px-3 py-6 font-semibold border-t border-gray-300">
              Subtotal
            </td>
            <td className="px-3 py-6 font-semibold text-right border-t border-gray-300">
              ${subtotal.toFixed(2)}
            </td>
          </tr>
          <tr>
            <td className="px-3 py-6 font-semibold border-t border-gray-300">
              Shipping
            </td>
            <td className="px-3 py-6 font-semibold text-right border-t border-gray-300">
              <p className="text-gray-700">${shippingCost.toFixed(2)}</p>
            </td>
          </tr>
          <tr>
            <td className="px-3 pt-6 font-extrabold border-t border-gray-300">
              Total
            </td>
            <td className="px-3 pt-6 font-extrabold text-right border-t border-gray-300">
              ${total.toFixed(2)}
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}
