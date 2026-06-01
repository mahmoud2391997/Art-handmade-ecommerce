function sendMessage(message) {
  // message = {
  //     name:"",
  //     email:"",
  //     message:""
  // }

  axios
    .post("https://art-server-puce.vercel.app/api/messages", message)
    .then((response) => {
      return response.data
    })
    .catch((error) => {
      throw error
    });
}
