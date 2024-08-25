// eslint-disable-next-line no-unused-vars
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
} from "../Redux/actions/cartActions";
import cart from "../assets/images/cart.jpg";
import { SlArrowDown, SlArrowUp } from "react-icons/sl";
import ButtonCart from "../components/ButtonCart";
import { Link } from "react-router-dom";

export default function Cart() {
  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.cart.cartItems || []);
  const total = useSelector((state) => state.cart.total || 0);

  return (
    <div className="relative pb-[500px] z-40">
      <div className="bg-white pb-[50px]">
        <div className="relative overflow-hidden w-full h-[150px] bg-white">
          <img
            className="absolute w-full h-full object-cover animate-moveVertical"
            src={cart}
            alt="Cart"
          />
          <div className="absolute top-1/2 left-0 z-10 p-4 transform -translate-y-1/2">
            <h3 className="text-xl sm:text-2xl md:text-3xl p-20 font-eb-garamond text-white uppercase tracking-wider leading-[5.1em]">
              Cart
            </h3>
          </div>
        </div>

        <div className="p-4 sm:p-6 md:p-10 max-w-4xl mx-auto bg-white rounded-lg">
          {cartItems.length === 0 ? (
            <div className="border-b h-20">
              <p className="text-center text-sm md:text-base text-gray-500">Your cart is empty</p>
            </div>
          ) : (
            <div>
              {/* Headers */}
              <div className="grid grid-cols-5 font-bold border-b text-xs sm:text-sm md:text-base lg:text-lg text-[#525252] py-5 text-center">
                <div className="font-eb-garamond hidden md:block"></div>
                <div className="font-eb-garamond">Product</div>
                <div className="font-eb-garamond">Price</div>
                <div className="font-eb-garamond">Quantity</div>
                <div className="font-eb-garamond">Subtotal</div>
              </div>

              {cartItems.map((item) => (
                <div
                  key={item._id}
                  className="grid grid-cols-5 md:grid-cols-5 border-b border-gray-200 py-4 items-center gap-4"
                >
                  <div className="flex items-center space-x-4 md:space-x-6">
                    <p
                      onClick={() => dispatch(removeFromCart(item._id))}
                      className="text-gray-500 text-lg md:text-xl sm:text-sm lg:text-lg p-4 cursor-pointer"
                    >
                      x
                    </p>
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-24 h-24 object-cover rounded hidden md:block"
                    />
                  </div>

                  <div className="text-gray-600 text-sm md:text-base p-4 md:p-14 font-eb-garamond">
                    {item.name}
                  </div>

                  <div className="text-gray-600 text-sm md:text-base font-eb-garamond p-4 md:p-16">
                    {item.price}$
                  </div>

                  <div className="flex items-center p-4 md:p-8">
                    <div className="flex items-center border border-gray-300 px-2 py-1 rounded-none">
                      <p className="text-gray-600 text-sm md:text-base mx-2 md:mx-4">{item.quantity}</p>
                      <div className="flex flex-col ml-2">
                        <p
                          onClick={() => dispatch(increaseQuantity(item._id))}
                          className="text-gray-500 hover:text-[#c9ab81] cursor-pointer"
                        >
                          <SlArrowUp className="w-2" />
                        </p>
                        <p
                          onClick={() => dispatch(decreaseQuantity(item._id))}
                          className="text-gray-500 hover:text-[#c9ab81] cursor-pointer"
                        >
                          <SlArrowDown className="w-2" />
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="text-gray-600 text-sm md:text-base p-4 md:p-12">
                    {item.price * item.quantity}$
                  </div>
                </div>
              ))}

              <div className="mb-10 p-6"></div>
              <div className="p-4 sm:p-6 md:p-10 max-w-4xl mx-auto bg-white rounded-lg">
                <div className="border-b text-[#525252] py-4 mb-6">
                  <h4 className="font-eb-garamond uppercase font-bold text-lg md:text-xl tracking-widest text-left">
                    Cart Totals
                  </h4>
                </div>
                <div className="flex border-b text-[#525252] py-4 mb-4">
                  <div className="w-1/2 font-eb-garamond text-left text-sm md:text-base">Total</div>
                  <div className="w-1/2 font-eb-garamond text-right text-sm md:text-base">{total}$</div>
                </div>
              </div>

              {/* Proceed to Checkout Button */}
              <Link to="/checkout">
                <ButtonCart title2={"Proceed to Checkout"} />
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
