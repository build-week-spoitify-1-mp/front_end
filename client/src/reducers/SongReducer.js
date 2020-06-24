// Actions
import { GET_SONGS, UPDATE_SONGS, GET_USER, SET_ERROR } from '../actions'

const initialState = {
    user: {},
    songData: [],
    isFetchingData: false,
    error: '',
}

export const songReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_SONGS:
            return {
                ...state,
                isFetchingData: true
            }
        case UPDATE_SONGS:
            return {
                ...state,
                songData: action.payload,
                isFetchingData: false,
            }
        case GET_USER:
            return {
                ...state,
                user: action.payload,
            }


        case SET_ERROR:
            return {
                ...state,
                isFetchingData: false,
                error: action.payload
            }
    
        default:
            return state
    }
}