export function isAuth() {
  const token =
    sessionStorage.getItem("token") || localStorage.getItem("token");

  if (token) {
    console.log("Token exists:", token);
    return true;
  } else {
    console.log("no token found");
    return false;
  }
}
