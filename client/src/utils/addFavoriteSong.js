import { axiosWithAuth } from './axiosWithAuth'

export const addFavoriteSong = (userID, trackID) => {
    axiosWithAuth()
        .post(`/favesongs/user/${userID}/favesong/${trackID}`, { "trackid": `${trackID}` })
        .catch(error => console.log(error))
}