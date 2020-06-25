import { axiosWithAuth } from '../utils/axiosWithAuth'
import { axiosSpotify } from '../utils/axiosSpotify'

export const GET_SONGS = "GET_SONGS"
export const UPDATE_SONGS = "UPDATE_SONGS"
export const GET_USER = "GET_USER"
export const ADD_FAVE = "ADD_FAVE"
export const DELETE_FAVE = "DELETE_FAVE"
export const NEEDS_REFRESH = "NEEDS_REFRESH"

export const SET_ERROR = "SET_ERROR"

export const getUser = () => dispatch => {
    axiosWithAuth()
        .get('/users/getuserinfo')
            .then(response => {
                // console.log(response)
                dispatch({ type: GET_USER, payload: response.data})
            })
            .catch(error => {
                console.log(error)
                dispatch({ type: SET_ERROR, payload: 'Error fetching data from api'})
            })
}

export const getSongs = (favesongs) => {
    const songIDList = [...favesongs].map(song => {
        return song.trackid
    })

    return dispatch => {
        dispatch({ type: GET_SONGS })
    
        axiosSpotify()
            .get(`/tracks/?ids=${songIDList.toString()}`)
            .then(response => {
                // console.log(response)
                dispatch({ type: UPDATE_SONGS, payload: response.data.tracks })
            })
            .catch(error => {
                console.log(error)
                dispatch({ type: SET_ERROR, payload: 'Error fetching data from api'})
            })
    }
}

export const addFave = (userid, trackid) => {
    return dispatch => {
        axiosWithAuth()
            .post(`/favesongs/user/${userid}/favesong/${trackid}`, { "trackid": `${trackid}` })
            .then(response => {
                // console.log(response)
                dispatch({type: ADD_FAVE})
            })
            .catch(error => {
                console.log(error)
                dispatch({ type: SET_ERROR, payload: 'Error adding song to favorites'})
            })
    }
}

export const deleteFave = (favesongid) => {
    return dispatch => {
        axiosWithAuth()
            .delete(`/favesongs/favesong/${favesongid}`)
            .then(response => {
                dispatch({type: DELETE_FAVE})
            })
            .catch(error => {
                console.log(error)
                dispatch({ type: SET_ERROR, payload: 'Error adding song to favorites'})
            })
    }
}