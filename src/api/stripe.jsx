import axios from "axios";

export default function stripePayment(orderItems, token) {
  axios
    .post(
      `https://art-ecommerce-server.glitch.me/api/create-checkout-session`,
      orderItems,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    )
    .then((response) => (window.location.href = response.data))

    .catch((error) => {
      console.error(error);
    });
}
