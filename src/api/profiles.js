function getProfiles() {
  axios
    .get(`https://art-ecommerce-server.glitch.me/api/profiles`)
    .then((response) => console.log(response.data))
    .catch((error) => {
      console.error(error);
    });
}

function getProfile(email) {
  axios
    .get(`https://art-ecommerce-server.glitch.me/api/profiles/${email}`)
    .then((response) => console.log(response.data))
    .catch((error) => {
      console.error(error);
    });
}
function editProfile(profileId, editedProfile) {
  axios
    .put(
      `https://art-ecommerce-server.glitch.me/api/profiles/${profileId}`,
      editedProfile
    )
    .then((response) => console.log(response.data))
    .catch((error) => {
      console.error(error);
    });
}
function deleteProfile(profileId) {
  axios
    .delete(`https://art-ecommerce-server.glitch.me/api/profiles/${profileId}`)
    .then((response) => console.log(response.data))
    .catch((error) => {
      console.error(error);
    });
}
