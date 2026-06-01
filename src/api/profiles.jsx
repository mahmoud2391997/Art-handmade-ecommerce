import axios from "axios";

export async function getProfile(token, setProfile) {
  await axios
    .get(`https://art-server-puce.vercel.app/api/profile`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
    .then((response) => {
      setProfile({
        firstName: response.data.first_name,
        lastName: response.data.last_name,
        email: response.data.email,
        phone: response.data.phone_number,
      });
    })
    .catch((error) => {
      throw error
    });
}
function editProfile(profileId, editedProfile, token) {
  axios
    .put(
      `https://art-server-puce.vercel.app/api/profile/${profileId}`,
      editedProfile,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    )
    .then((response) => {
      return response.data
    })
    .catch((error) => {
      throw error
    });
}
function deleteProfile(profileId, token) {
  axios
    .delete(`https://art-server-puce.vercel.app/api/profile/${profileId}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
    .then((response) => {
      return response.data
    })
    .catch((error) => {
      throw error
    });
}
