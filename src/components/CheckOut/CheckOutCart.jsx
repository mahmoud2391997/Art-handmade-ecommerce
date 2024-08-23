import React from 'react';

export default function CheckOutCart() {
return (
    <>
    <div className="bg-transparent p-4 rounded-md">
    <h3 className="text-lg font-semibold mb-4 text-center capitalize">order summary</h3>
    <table className="w-full border-separate border-spacing-0">
        <thead>
        <tr>
            <th className="text-left pb-2 border-b border-gray-300">Product</th>
            <th className="text-right pb-2 border-b border-gray-300">Subtotal</th>
        </tr>
        </thead>
        <tbody>
        <tr>
            <td className="py-6 border-b border-gray-300">Degas Book × 1</td>
            <td className="py-6 text-right border-b border-gray-300">$12</td>
        </tr>
        <tr>
            <td className="py-6 border-b border-gray-300">Linen Bag × 1</td>
            <td className="py-6 text-right border-b border-gray-300">$29</td>
        </tr>
        <tr>
            <td className="py-6 border-b border-gray-300">Musea Book × 1</td>
            <td className="py-6 text-right border-b border-gray-300">$17</td>
        </tr>
        <tr>
            <td className="py-6 font-semibold border-t border-gray-300">Subtotal</td>
            <td className="py-6 font-semibold text-right border-t border-gray-300">$58</td>
        </tr>
        <tr>
            <td className="py-6 font-semibold border-t border-gray-300">Shipping</td>
            <td className="py-6 font-semibold text-right border-t border-gray-300"><p className='text-gray-700'>
            Maadi, Cairo Egypt
            </p>
            
            </td>
        </tr>
        <tr>
            <td className="pt-6 font-semibold border-t border-gray-300">Total</td>
            <td className="pt-6 font-semibold text-right border-t border-gray-300">$58</td>
        </tr>
        </tbody>
    </table>
    </div>
    </>
);
}
