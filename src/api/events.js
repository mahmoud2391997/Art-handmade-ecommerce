function getEvents() {
  axios
    .get("https://art-ecommerce-server.glitch.me/api/events")
    .then((response) => console.log(response.data))
    .catch((error) => {
      console.error(error);
    });
}
function getEvents(eventId) {
  axios
    .get(`https://art-ecommerce-server.glitch.me/api/events/${eventId}`)
    .then((response) => console.log(response.data))
    .catch((error) => {
      console.error(error);
    });
}
