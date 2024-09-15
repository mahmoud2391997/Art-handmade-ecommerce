export function isAuth() {
  const token =
    sessionStorage.getItem("token") || localStorage.getItem("token");

  if (token) {
    return true;
  } else {
    return false;
  }
}
