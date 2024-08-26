function loginAuthentication(email, password) {
  axios
    .post(`https://art-ecommerce-server.glitch.me/api/auth/login`, {
      email: email,
      password: password,
    })
    .then((response) => {
      console.log(response.data);
      sessionStorage.setItem("token", response.data.token);
    })
    .catch((error) => {
      console.error(error);
    });
}
function registerAuthentication(email, password) {
  axios
    .post(`https://art-ecommerce-server.glitch.me/api/auth/register`, {
      email: email,
      password: password,
    })
    .then((response) => {
      console.log(response.data);
      sessionStorage.setItem("token", response.data.token);
    })
    .catch((error) => {
      console.error(error);
    });
}
// function checkAuthroize() {
//   let token = sessionStorage.getItem("token");

//   axios
//     .get(`https://art-ecommerce-server.glitch.me/api/auth/authorize`, {
//       headers: {
//         Authorization: `Bearer ${token}`,
//         "Content-Type": "application/json",
//       },
//     })
//     .then((response) => {
//       console.log(response.data);
//     })
//     .catch((error) => {
//       console.error(error);
//     });
// }
