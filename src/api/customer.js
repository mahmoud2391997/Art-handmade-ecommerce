function getCustomerInfo(token) {
  axios
    .get(`https://art-server-puce.vercel.app/api/customer`, {
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
