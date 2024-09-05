function getProfile(token) {
  axios
    .get(`https://art-ecommerce-server.glitch.me/api/profile`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
    .then((response) => console.log(response.data))
    .catch((error) => {
      console.error(error);
    });
}
function editProfile(profileId, editedProfile, token) {
  axios
    .put(
      `https://art-ecommerce-server.glitch.me/api/profile/${profileId}`,
      editedProfile,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    )
    .then((response) => console.log(response.data))
    .catch((error) => {
      console.error(error);
    });
}
function deleteProfile(profileId, token) {
  axios
    .delete(`https://art-ecommerce-server.glitch.me/api/profile/${profileId}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
    .then((response) => console.log(response.data))
    .catch((error) => {
      console.error(error);
    });
}
