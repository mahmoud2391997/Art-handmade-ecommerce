function buyTicket(eventId, clientInfo) {
  //    clientInfo = {
  //         name:,
  //         email:,
  //         phone_number:,
  //     }
  axios
    .post(
      `https://art-ecommerce-server.glitch.me/api/ticket/${eventId}`,
      clientInfo
    )
    .then((response) => console.log(response.data))
    .catch((error) => {
      console.error(error);
    });
}
