import OrderCard from "../../components/OrderCard/OrderCard";
import PageTitle from "../../components/Shared/PageTitle";
import SingleOrder from "../../components/SingleOrder/SingleOrder";
import { getOrders } from "../../api/orders.jsx";
import { useEffect, useState } from "react";

export default function OrderHistory() {
  const [orders, setOrders] = useState([]);
  
  useEffect(() => {
    async function fetchOrders() {
      let token =
        sessionStorage.getItem("token") || localStorage.getItem("token");
      const ordersData = await getOrders(token);
      if (ordersData && ordersData.length > 0) {
        setOrders(ordersData);
      } else {
        setOrders(null);
      }
    }
    fetchOrders();
  }, []);
  return (
    <div className="w-full h-auto bg-white">
      {orders ? (
        orders.map((order) => {
          return <SingleOrder order={order} />;
        })
      ) : (
        <div className="w-full h-[19.8vh] flex flex-col items-center">
          <div className="w-[75%] h-[40%] flex items-center justify-center m-auto border-2 border-[var(--main-color)]">
            <h1
              className="md:text-xl lg:text-2xl font-medium text-lg text-center text-[var(--main-gray)]"
              style={{
                fontFamily: "var(--main-font)",
                letterSpacing: ".16em",
                lineHeight: "1.31em",
              }}
            >
              No Orders Are Placed
            </h1>
          </div>
        </div>
      )}
    </div>
  );
}
