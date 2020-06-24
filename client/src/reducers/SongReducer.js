// Actions
import { GET_SONGS, UPDATE_SONGS, GET_USER, ADD_FAVE, DELETE_FAVE, SET_ERROR } from '../actions'

const initialState = {
    user: {
        userid: 0,
        username: '',
        email: '',
        favesongs: [],
    },
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
                user: {
                    userid: action.payload.userid,
                    username: action.payload.username,
                    email: action.payload.email,
                    favesongs: [...(action.payload.favesongs)]
                }
            }
            
        case ADD_FAVE:
            return {
                ...state
            }
        case DELETE_FAVE:
            return {
                ...state
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