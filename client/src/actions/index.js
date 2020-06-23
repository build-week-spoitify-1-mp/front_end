import axios from 'axios'

export const GET_SONGS = "GET_SONGS"
export const UPDATE_FILMS = "UPDATE_SONGS"
export const SET_ERROR = "SET_ERROR"

export const getSongs = () => dispatch => {
    dispatch({ type: GET_SONGS })
    // TODO: write get songs
    // axios
    //     .get('https://ghibliapi.herokuapp.com/films')
    //     .then(response => {
    //         console.log(response)
    //         dispatch({ type: UPDATE_FILMS, payload: response.data })
    //     }) 
    //     .catch(error => {
    //         console.log(error)
    //         dispatch({ type: SET_ERROR, payload: 'Error fetching data from api'})
    //     })
}