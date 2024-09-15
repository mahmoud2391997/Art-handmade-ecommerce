/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react'
import cart from '../assets/images/cart.jpg'


export default function ImgTitle({title}) {
  return (
    <div className="relative overflow-hidden w-full h-[150px] bg-white">
            <img
              className="absolute w-full h-full object-cover animate-moveVertical"
              src={cart}
              alt="Cart"
            />
            <div className="absolute top-1/2 left-0 z-10 p-4 transform -translate-y-1/2">
              <h3 className="text-xl sm:text-2xl md:text-3xl p-20 font-eb-garamond text-white uppercase tracking-wider leading-[5.1em]">
                {title}
              </h3>
            </div>
          </div>
  )
}