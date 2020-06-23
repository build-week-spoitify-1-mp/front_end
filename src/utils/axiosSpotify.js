import axios from "axios";

export const CLIENT_ID = '77791acd07c9408ba64ee5079ac99f64'
export const CLIENT_SECRET = '12b84b2005e940ed89c892b3f8c62901'

export const axiosSpotify = () => {
    const token = window.localStorage.getItem("spotify_token"); // Retrieve token from local storage

    return axios.create({ // Return new instance of axios
        headers: {
            Authorization: ` Bearer ${token}`
        },
        baseURL: 'https://api.spotify.com/v1'
    });
};

