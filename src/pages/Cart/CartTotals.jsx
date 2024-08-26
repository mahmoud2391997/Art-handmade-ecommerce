// eslint-disable-next-line no-unused-vars
import React from 'react'
import { useSelector } from 'react-redux';

export default function CartTotals() {
    const total = useSelector((state) => state.cart.total || 0);
  return (
    <div>
      <div className="mb-10 p-6"></div>
              <div className="p-4 sm:p-6 md:p-10 max-w-4xl mx-auto bg-white rounded-lg">
                <div className="border-b text-[#525252] py-4 mb-6">
                  <h4 className="font-eb-garamond uppercase font-bold text-lg md:text-xl tracking-widest text-left">
                    Cart Totals
                  </h4>
                </div>
                <div className="flex border-b text-[#525252] py-4 mb-4">
                  <div className="w-1/2 font-eb-garamond text-left text-sm md:text-base">
                    Total
                  </div>
                  <div className="w-1/2 font-eb-garamond text-right text-sm md:text-base">
                    {total}$
                  </div>
                </div>
              </div>
    </div>
  )
}
