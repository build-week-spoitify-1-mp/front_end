import axios from "axios";

export const axiosWithAuth = () => {
  const token = window.localStorage.getItem("user_token"); // Retrieve token from local storage

  return axios.create({ // Return new instance of axios
    headers: {
      Authorization: `Bearer ${token}`
    },
    baseURL: "https://bw-spotify1-mp.herokuapp.com"
  });
};