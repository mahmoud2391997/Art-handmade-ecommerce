import { dummyAuthResponse, simulateDelay } from "./dummyData";

export async function loginAuthentication(
  email,
  password,
  rememberMe,
  navigate,
  location
) {
  await simulateDelay(500);
  
  if (email && password) {
    const response = dummyAuthResponse;
    
    if (response.success) {
      if (rememberMe) {
        localStorage.setItem("token", response.token);
        sessionStorage.setItem("token", response.token);
      } else {
        sessionStorage.setItem("token", response.token);
      }
      
      const redirectTo = location.state?.from?.pathname || "/";
      navigate(redirectTo, { replace: true });
    }
    return true;
  }
  return false;
}

export async function registerAuthentication(profile, navigate) {
  await simulateDelay(500);
  
  const response = dummyAuthResponse;
  
  if (response.success) {
    sessionStorage.setItem("token", response.token);
    navigate("/", { replace: true });
  }
  return response;
}

// function checkAuthroize() {
//   let token = sessionStorage.getItem("token");

//   axios
//     .get(`https://art-server-puce.vercel.app/api/auth/authorize`, {
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
