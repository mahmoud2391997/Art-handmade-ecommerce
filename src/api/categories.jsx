import axios from "axios";

export function getCategories({ setCategories }) {
  axios
    .get("https://art-ecommerce-server.glitch.me/api/categories")
    .then((response) => {
      console.log(response.data);
      setCategories(response.data);
    })
    .catch((error) => {
      console.error(error);
    });
}
