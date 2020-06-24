import axios from "axios";

export const axiosSpotify = () => {
    const token = window.localStorage.getItem("spotify_token"); // Retrieve token from local storage

    return axios.create({ // Return new instance of axios
        headers: {
            Authorization: ` Bearer ${token}`
        },
        baseURL: 'https://api.spotify.com/v1'
    });
};