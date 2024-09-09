function sendMessage(message) {
  // message = {
  //     name:"",
  //     email:"",
  //     message:""
  // }

  axios
    .post("https://art-ecommerce-server.glitch.me/api/messages", message)
    .then((response) => console.log(response.data))
    .catch((error) => {
      console.error(error);
    });
}
