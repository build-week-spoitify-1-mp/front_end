import { axiosWithAuth } from '../utils/axiosWithAuth'
import { axiosSpotify } from '../utils/axiosSpotify'

export const GET_SONGS = "GET_SONGS"
export const UPDATE_SONGS = "UPDATE_SONGS"
export const GET_USER = "GET_USER"

export const SET_ERROR = "SET_ERROR"

export const getUser = () => dispatch => {
    axiosWithAuth()
        .get('/users/getuserinfo')
            .then(response => {
                console.log(response)
                dispatch({ type: GET_USER, payload: response.data})
            })
            .catch(error => {
                console.log(error)
                dispatch({ type: SET_ERROR, payload: 'Error fetching data from api'})
            })
}

export const getSongs = () => dispatch => {
    dispatch({ type: GET_SONGS })

    axiosSpotify()
        .get(`/tracks/${trackID}`)
        .then(response => {
            console.log(response)
            dispatch({ type: UPDATE_SONGS, payload: response.data })
        })
        .catch(error => {
            console.log(error)
            dispatch({ type: SET_ERROR, payload: 'Error fetching data from api'})
        })
}