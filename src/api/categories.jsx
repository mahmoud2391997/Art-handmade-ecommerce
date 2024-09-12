import axios from "axios";

export default function getCategories({ setCategories }) {
  return axios
    .get("https://art-ecommerce-server.glitch.me/api/categories")
    .then((response) => {
      console.log(response.data);
      setCategories(response.data);
    })
    .catch((error) => {
      console.error(error);
    });
}
