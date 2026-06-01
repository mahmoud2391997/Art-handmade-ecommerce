function getEvents() {
  axios
    .get("https://art-server-puce.vercel.app/api/events")
    .then((response) => {
      return response.data
    })
    .catch((error) => {
      throw error
    });
}
function getEvent(eventId) {
  axios
    .get(`https://art-server-puce.vercel.app/api/events/${eventId}`)
    .then((response) => {
      return response.data
    })
    .catch((error) => {
      throw error
    });
}
