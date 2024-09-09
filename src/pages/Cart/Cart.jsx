/* eslint-disable react-hooks/rules-of-hooks */
// eslint-disable-next-line no-unused-vars
import { useDispatch, useSelector } from "react-redux";
import {
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
  updateTotal,
} from "../../Redux/actions/cartActions";
import cart from "../../assets/images/cart.jpg";
import { SlArrowDown, SlArrowUp } from "react-icons/sl";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { MdDeleteOutline } from "react-icons/md";
import "../../index.css";
import RollUp from "../../components/RollUpButton/RollUp";
import CartTotals from "./CartTotals";
import MainButton from "../../components/Shared/MainButton";
import { toast, Bounce } from "react-toastify";
import {
  decreaseItemQuantity,
  fetchCartItemsAction,
  increaseItemQuantity,
  removeCartItem,
} from "../../Redux/actions/loggedInCartActions";
import { useEffect } from "react";
import EmptyPage from "../../components/EmptyPage";

export default function Cart() {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

  const calculateItemSubtotal = (price, quantity) => {
    return price * quantity;
  };
  /////////////الجزء دا عشان اول مافتح الصفحة يجبهالى من اول///////////////////
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  ///////////////////////////////////////////////////////////////////
  const handleCheckOut = () => {
    const isloggedIn =
      sessionStorage.getItem("token") || localStorage.getItem("token");

    if (isloggedIn) {
      navigate("/checkout");
    } else {
      navigate("/login", { state: { from: location } });
    }
  };
  if (sessionStorage.getItem("token") || localStorage.getItem("token")) {
    const { loggedinCart } = useSelector((state) => state.loggedinCart);
    console.log(loggedinCart);
    useEffect(() => {
      dispatch(fetchCartItemsAction());
    }, []);

    return (
      <div className="relative pb-[500px] z-40 sm:w-full">
        <div className="bg-white pb-[50px] md:w-[100%] lg:w-[100%] sm:w-[100%] w-[100%]">
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

          <div className="p-1 sm:p-6 md:p-10 max-w-4xl mx-auto bg-white rounded-lg">
            {loggedinCart.length === 0 ? (
              <div className="w-full h-[19.8vh] flex flex-col items-center">
                <EmptyPage />
                <Link to="/products">
                  <MainButton title={"Back To Product"} />
                </Link>
              </div>
            ) : (
              <div>
                {/* Titles */}
                <div className="grid grid-cols-5 font-bold border-b text-xs sm:text-sm md:text-base lg:text-lg text-[#525252] py-5 text-center">
                  <div className="font-eb-garamond">Product</div>
                  <div className="font-eb-garamond">Price</div>
                  <div className="font-eb-garamond">Quantity</div>
                  <div className="font-eb-garamond hidden md:block">
                    Subtotal
                  </div>
                  <div className="font-eb-garamond hidden md:block"></div>
                </div>

                {loggedinCart.map((item) => (
                  <div
                    key={item.item._id}
                    className="grid grid-cols-5 sm:grid-cols-5 border-b border-gray-200 md:mx-2 sm:mx-2 py-4 sm:py-1 md:py-2 lg:py-4 items-center gap-4 md:gap-2 sm:gap-1 lg:gap-4"
                  >
                    <div className="flex flex-col items-center space-y-2 md:flex-row md:items-center md:space-x-1 md:space-y-0 sm:space-x-0.5 ">
                      <img
                        src={item.item.image}
                        alt={item.item.name}
                        className="w-10 h-10 sm:w-16 sm:h-16 lg:w-24 lg:h-24 object-cover rounded "
                      />
                      <p className="text-gray-600 text-[12px] md:text-base font-eb-garamond p-2 ">
                        {item.item.name}
                      </p>
                    </div>

                    <div className="  sm:ml-10 md:ml-14 ml-5 text-gray-600 text-sm md:text-base font-eb-garamond  ">
                      ${item.item.price}
                    </div>

                    <div className="flex items-center p-2 sm:p-4 md:p-6 lg:p-8">
                      <div className="flex items-center border border-gray-300 px-2 py-1 rounded-none">
                        <p className="text-gray-600 text-xs sm:text-sm md:text-[12px] lg:text-[14px] mx-1 sm:mx-2 md:mx-4">
                          {item.quantity}
                        </p>
                        <div className="flex flex-col ml-1 sm:ml-2">
                          <p
                            onClick={() =>
                              dispatch(increaseItemQuantity(item.item._id))
                            }
                            className="text-gray-500  hover:text-[#c9ab81] cursor-pointer"
                          >
                            <SlArrowUp className="w-2 h-2 " />
                          </p>
                          <p
                            onClick={() =>
                              dispatch(decreaseItemQuantity(item.item._id))
                            }
                            className="text-gray-500 hover:text-[#c9ab81] cursor-pointer"
                          >
                            <SlArrowDown className="w-2 h-2 " />
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="text-gray-600 text-sm md:text-base font-eb-garamond p-4 md:p-16 hidden md:block">
                      ${calculateItemSubtotal(item.item.price, item.quantity)}
                    </div>
                    <div className="flex items-center justify-between">
                      <MdDeleteOutline
                        onClick={() => {
                          dispatch(removeCartItem(item.item._id));
                          toast.info("Product deleted from cart", {
                            position: "top-center",
                            autoClose: 2000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            theme: "light",
                            transition: Bounce,
                          });
                        }}
                        className="text-[#c9ab81] hover:text-[#816640] cursor-pointer text-[18px] md:text-[24px]"
                      />
                    </div>
                  </div>
                ))}
                <CartTotals />

                <div className="flex justify-center text-center mt-6">
                  {/* <Link to="/checkout" className="w-full max-w-xs text-center"> */}
                  <MainButton
                    // className="w-full text-center py-4 "
                    title={"Checkout"}
                    onClick={handleCheckOut}
                  />
                  {/* </Link> */}
                </div>
              </div>
            )}
          </div>
          <RollUp />
        </div>
      </div>
    );
  } else {
    const cartItems = useSelector((state) => state.cart.cartItems || []);
    console.log(cartItems);
    return (
      <div className="relative pb-[500px] z-40 sm:w-full">
        <div className="bg-white pb-[50px] md:w-[100%] lg:w-[100%] sm:w-[100%] w-[100%]">
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

          <div className="p-1 sm:p-6 md:p-10 max-w-4xl mx-auto bg-white rounded-lg">
            {cartItems.length === 0 ? (
              <div className="w-full h-[19.8vh] flex flex-col items-center">
                <EmptyPage />
                <Link to="/products">
                  <MainButton title={"Back To Product"} />
                </Link>
              </div>
            ) : (
              <div>
                {/* Titles */}
                <div className="grid grid-cols-5 font-bold border-b text-xs sm:text-sm md:text-base lg:text-lg text-[#525252] py-5 text-center">
                  <div className="font-eb-garamond">Product</div>
                  <div className="font-eb-garamond">Price</div>
                  <div className="font-eb-garamond">Quantity</div>
                  <div className="font-eb-garamond hidden md:block">
                    Subtotal
                  </div>
                  <div className="font-eb-garamond hidden md:block"></div>
                </div>

                {cartItems.map((item) => (
                  <div
                    key={item._id}
                    className="grid grid-cols-5 sm:grid-cols-5 border-b border-gray-200 md:mx-2 sm:mx-2 py-4 sm:py-1 md:py-2 lg:py-4 items-center gap-4 md:gap-2 sm:gap-1 lg:gap-4"
                  >
                    <div className="flex items-center space-x-1 md:space-x-0.5 sm:space-x-0.5 ">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-10 h-10 sm:w-16 sm:h-16 lg:w-24 lg:h-24  object-cover rounded "
                      />
                      <p className="  ml-8 text-gray-600 text-[12px] md:text-base font-eb-garamond p-5 ">
                        {item.name}
                      </p>
                    </div>

                    <div className="  sm:ml-10 md:ml-12 text-gray-600 text-sm md:text-base font-eb-garamond  ">
                      ${item.price}
                    </div>

                    <div className="flex items-center p-2 sm:p-4 md:p-6 lg:p-8">
                      <div className="flex items-center border border-gray-300 px-2 py-1 rounded-none">
                        <p className="text-gray-600 text-xs sm:text-sm md:text-[12px] lg:text-[14px] mx-1 sm:mx-2 md:mx-4">
                          {item.quantity}
                        </p>
                        <div className="flex flex-col ml-1 sm:ml-2">
                          <p
                            onClick={() => dispatch(increaseQuantity(item._id))}
                            className="text-gray-500  hover:text-[#c9ab81] cursor-pointer"
                          >
                            <SlArrowUp className="w-2 h-2" />
                          </p>
                          <p
                            onClick={() => dispatch(decreaseQuantity(item._id))}
                            className="text-gray-500 hover:text-[#c9ab81] cursor-pointer"
                          >
                            <SlArrowDown className="w-2 h-2 " />
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="text-gray-600 text-sm md:text-base font-eb-garamond p-4 md:p-16 hidden md:block">
                      ${calculateItemSubtotal(item.price, item.quantity)}
                    </div>
                    <div className="flex items-center justify-between">
                      <MdDeleteOutline
                        onClick={() => {
                          dispatch(removeFromCart(item._id));
                          toast.info("Product deleted from cart", {
                            position: "top-center",
                            autoClose: 2000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            theme: "light",
                            transition: Bounce,
                          });
                        }}
                        className="text-[#c9ab81] hover:text-[#816640] cursor-pointer text-[18px] md:text-[24px]"
                      />
                    </div>
                  </div>
                ))}
                <CartTotals />

                <div className="flex justify-center text-center mt-6">
                  {/* <Link to="/checkout" className="w-full max-w-xs text-center"> */}
                  <MainButton
                    // className="w-full text-center py-4 "
                    title={"Checkout"}
                    onClick={handleCheckOut}
                  />
                  {/* </Link> */}
                </div>
              </div>
            )}
          </div>
          <RollUp />
        </div>
      </div>
    );
  }
}
