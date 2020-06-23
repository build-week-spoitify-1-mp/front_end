import axios from 'axios'
import qs from 'qs'

// Gets JWT for Spotify Web API
export const getAuth = () => {
    const CLIENT_ID = '77791acd07c9408ba64ee5079ac99f64'
    const CLIENT_SECRET = '12b84b2005e940ed89c892b3f8c62901'

    const headers = {
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        auth: {
            username: CLIENT_ID,
            password: CLIENT_SECRET,
        },
    };

    const data = {
        grant_type: 'client_credentials',
    };

    axios
        .post(
            'https://accounts.spotify.com/api/token',
            qs.stringify(data),
            headers
        )
        .then(response => {
            //console.log(response)
            window.localStorage.setItem("spotify_token", response.data.access_token);
        })
        .catch(error => {console.log(error)})
}