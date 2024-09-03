import OrderCard from "../../components/OrderCard/OrderCard";
import PageTitle from "../../components/Shared/PageTitle";
import SingleOrder from "../../components/SingleOrder/SingleOrder";
import { getOrders } from "../../api/orders.jsx";
import { useEffect, useState } from "react";
import axios from "axios";
export default function OrderHistory() {
  const [orders, setOrders] = useState([]);
  function getOrders() {
    let token =
      sessionStorage.getItem("token") || localStorage.getItem("token");
    axios
      .get("https://art-ecommerce-server.glitch.me/api/orders", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        console.log(response.data);

        setOrders(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }
  useEffect(() => {
    getOrders();
  }, []);
  return (
    <div className="w-full h-auto z-40 relative pb-[200px] bg-white">
      <PageTitle title={"Orders History"} />
      {orders.map((order) => {
        return <SingleOrder order={order} />;
      })}
    </div>
  );
}
