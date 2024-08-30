import axios from "axios";
export function loginAuthentication(email, password) {
  axios
    .post(`https://art-ecommerce-server.glitch.me/api/auth/login`, {
      email: email,
      password: password,
    })
    .then((response) => {
      console.log(response.data);
      sessionStorage.setItem("token", response.data.token);
      //navigate
    })
    .catch((error) => {
      console.error(error);
    });
}
export function registerAuthentication(profile) {
  axios
    .post(`https://art-ecommerce-server.glitch.me/api/auth/register`, profile)
    .then((response) => {
      console.log(response.data);
      sessionStorage.setItem("token", response.data.token);
      //navigate home
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
