function buyTicket(eventId, clientInfo, token) {
  //    clientInfo = {
  //         name:,
  //         email:,
  //         phone_number:,
  //     }
  axios
    .post(
      `https://art-ecommerce-server.glitch.me/api/ticket/${eventId}`,
      clientInfo,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    )
    .then((response) => console.log(response.data))
    .catch((error) => {
      console.error(error);
    });
}
