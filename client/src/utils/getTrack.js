import { axiosSpotify } from './axiosSpotify'

export const getTrack = async (trackID) => {
    const response = await axiosSpotify()
        .get(`/tracks/${trackID}`)
        .catch(error => {console.log(error)})

    const trackData = await response.json();

    return trackData;
}