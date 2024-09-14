import axios from "axios";
import MainButton from "../MainButton";
import OrderCard from "../OrderCard/OrderCard";
import loadStorage from "../../helpers/Storage";
import { useState } from "react";
import { Bounce, toast } from "react-toastify";

export default function SingleOrder({ order }) {
  const [status, setStatus] = useState(order.orderStatus);
  function cancelOrder(orderId, token) {
    setStatus("Canceled");
    toast.info("Order Cancelled Successfully", {
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
    axios
      .put(
        `https://art-ecommerce-server.glitch.me/api/orders/${orderId}`,
        { status: "Canceled" },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((response) => {
        return response.data
      })
      .catch((error) => {
        throw error
      });
  }

  function formatDate(dateString) {
    const date = new Date(dateString);

    const hours = String(date.getUTCHours()).padStart(2, "0");
    const minutes = String(date.getUTCMinutes()).padStart(2, "0");
    const seconds = String(date.getUTCSeconds()).padStart(2, "0");

    const day = String(date.getUTCDate()).padStart(2, "0");
    const month = String(date.getUTCMonth() + 1).padStart(2, "0"); // Month is zero-based
    const year = date.getUTCFullYear();

    return `${day}-${month}-${year} ${hours}:${minutes}:${seconds}`;
  }
  return (
    <div className="my-10 border-2 md:p-10 w-[90%] m-auto text-[var(--main-gray)] border-gray-300 font-eb-garamond">
      <div className="grid md:grid-cols-4  sm:grid-cols-2 grid-cols-1 px-4 py-4 md:py-6 md:p-6 xl:p-8 space-y-2 sm:h-[8rem] h-auto w-full">
        <div className="w-full flex flex-col justify-between mt-2 text-center h-full">
          <span className="text-lg">Order Number</span>
          <span className="text-xl text-black font-bold">
            #{order.orderNumber}
          </span>
        </div>
        <div className="w-full flex flex-col justify-between text-center h-full">
          <span className="text-lg">Order Date</span>
          <span className="text-xl text-black font-bold">
            {order.orderDate}
          </span>
        </div>
        <div className="w-full flex flex-col justify-between text-center h-full">
          <span className="text-lg">Order Status</span>
          <span className="text-xl text-black font-bold">{status}</span>
        </div>
        <div className="w-full flex flex-col justify-between text-center h-full">
          <span className="text-lg">Payment Method</span>
          <span className="text-xl text-black font-bold">
            {order.paymentMethod}
          </span>
        </div>
      </div>
      <div className="mt-20 flex flex-col xl:flex-row jusitfy-center items-stretch w-full ">
        <div className="sm:px-5 md:min-w-[600px] md:w-1/2 w-full flex flex-col justify-start items-start  ">
          <div className="flex flex-col justify-start items-start dark:bg-gray-800 bg-gray-50 sm:px-4 sm:py-4 w-full">
            <p className="text-3xl m-auto sm:m-0 md:text-xl text-center dark:text-white font-semibold leading-6 xl:leading-5 text-gray-800">
              Order Items
            </p>

            <div className="mt-4 w-full  h-auto  md:mt-6 grid grid-cols-1 gap-5  justify-start items-start md:items-center  ">
              {order.orderItems.map((orderItem) => {
                return <OrderCard item={orderItem} />;
              })}
            </div>
          </div>
        </div>
        <div className="xl:w-1/2 my-10 sm:m-0  w-full max-h-96 md:mt-12">
          <table className=" w-3/4 m-auto h-[354px]  text-3xl">
            <tbody className="h-full flex flex-col justify-between">
              <tr className="border-b w-full  h-1/4 flex justify-between border-[var(--main-color)]">
                <td>price</td>
                <td>
                  {order.orderItems.reduce(
                    (acc, item) =>
                      acc + item.productPrice * item.productQuantity,
                    0
                  )}
                  $
                </td>
              </tr>
              <tr className="border-b h-1/4 border-[var(--main-color)] w-full flex justify-between">
                <td>shipping</td>
                <td>{"50$"}</td>
              </tr>
              <tr className="border-b h-1/4 border-[var(--main-color)] w-full  flex justify-between">
                <td>total</td>
                <td>
                  {order.orderItems.reduce(
                    (acc, item) =>
                      acc + item.productPrice * item.productQuantity,
                    0
                  ) +
                    50 +
                    "$"}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      {status === "Pending" ? (
        <div
          className="xl:w-full lg:w-1/2 flex justify-center
        mt-16"
        >
          <MainButton
            title={"Cancel Order"}
            onClick={() => {
              cancelOrder(order._id, loadStorage());
            }}
          />
        </div>
      ) : null}
    </div>
  );
}
