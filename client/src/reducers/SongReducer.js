// Actions
import { GET_SONGS, UPDATE_SONGS, SET_ERROR } from '../actions'

const initialState = {
    songs: [],
    isFetchingData: false,
    error: '',
}

export const filmReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_SONGS:
            return {
                ...state,
                isFetchingData: true
            }
        case UPDATE_SONGS:
            return {
                ...state,
                songs: action.payload,
                isFetchingData: false,
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