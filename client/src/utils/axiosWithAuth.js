import axios from "axios";

export const axiosWithAuth = () => {
  const token = window.localStorage.getItem("token"); // Retrieve token from local storage

  return axios.create({ // Return new instance of axios
    headers: {
      authorization: token
    },
    baseURL: "http://localhost:5000"
  });
};