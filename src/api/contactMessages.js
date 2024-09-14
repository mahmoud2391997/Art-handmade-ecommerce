function sendMessage(message) {
  // message = {
  //     name:"",
  //     email:"",
  //     message:""
  // }

  axios
    .post("https://art-ecommerce-server.glitch.me/api/messages", message)
    .then((response) => {
      return response.data
    })
    .catch((error) => {
      throw error
    });
}
