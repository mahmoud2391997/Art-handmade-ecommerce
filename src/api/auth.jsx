// import { useNavigate } from "react-router-dom";

import axios from "axios";
import { replace } from "react-router-dom";

export function loginAuthentication(
  email,
  password,
  rememberMe,
  navigate,
  location
) {
  axios
    .post(`https://art-ecommerce-server.glitch.me/api/auth/login`, {
      email: email,
      password: password,
      rememberMe: rememberMe,
    })
    .then((response) => {
      console.log(response.data);
      if (rememberMe) {
        localStorage.setItem("token", response.data.token);
        sessionStorage.setItem("token", response.data.token);
      } else {
        sessionStorage.setItem("token", response.data.token);
      }
      if (response.data.success) {
        sessionStorage.setItem("token", response.data.token);
        // navigate("/", { replace: true });
        console.log(location.state);
        const redirectTo = location.state?.from?.pathname || "/";
        navigate(redirectTo, { replace: true });
      }
    })
    .catch((error) => {
      console.error(error);
    });
}
export function registerAuthentication(profile, navigate) {
  axios
    .post(`https://art-ecommerce-server.glitch.me/api/auth/register`, profile)
    .then((response) => {
      console.log(response.data);
      if (response.data.success) {
        sessionStorage.setItem("token", response.data.token);
        navigate("/", { replace: true });
      }
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
