function getEvents() {
  axios
    .get("https://art-ecommerce-server.glitch.me/api/events")
    .then((response) => {
      return response.data
    })
    .catch((error) => {
      throw error
    });
}
function getEvent(eventId) {
  axios
    .get(`https://art-ecommerce-server.glitch.me/api/events/${eventId}`)
    .then((response) => {
      return response.data
    })
    .catch((error) => {
      throw error
    });
}
