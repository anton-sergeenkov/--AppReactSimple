import { ASYNC_PENDING, ASYNC_SUCCESS } from '../actionTypes';

const initialState = {
    items: [],
    isFetching: false
};

const reducerAsyncData = (state = initialState, action) => {
    switch (action.type) {
        case ASYNC_PENDING:
            return {
                ...state,
                isFetching: true
            }
        case ASYNC_SUCCESS:
            return {
                ...state,
                items: action.payload,
                isFetching: false
            }
        default:
            return state;
    }
};

export default reducerAsyncData;
