function buyTicket(eventId, clientInfo, token) {
  //    clientInfo = {
  //         name:,
  //         email:,
  //         phone_number:,
  //     }
  axios
    .post(
      `https://art-server-puce.vercel.app/api/ticket/${eventId}`,
      clientInfo,
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
