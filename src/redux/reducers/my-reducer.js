import { GET_PHOTOS_REQUEST, GET_PHOTOS_SUCCESS } from '../actionTypes';

const initialState = {
    year: 2019,
    photos: [],
    isFetching: false
};

const myReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_PHOTOS_REQUEST: {
            return { 
                ...state, 
                year: action.payload, 
                isFetching: true 
            }
        }
        case GET_PHOTOS_SUCCESS: {
            return {
                ...state, 
                photos: action.payload, 
                isFetching: false 
            }
        }
        default: {
            return state;
        }
    }
};

export default myReducer;