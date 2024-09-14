import axios from "axios";

export default function getCategories({ setCategories }) {
 return axios
    .get("https://art-ecommerce-server.glitch.me/api/categories")
    .then((response) => {
      setCategories(response.data);
    })
    .catch((error) => {
      throw error;
    });
}
