import { NAME, INCREMENT } from '../actionTypes';

const initialState = {
    value: 0,
    name: ''
};

const reducerStarter = (state = initialState, action) => {
    // console.log('Reducer');

    switch (action.type) {
        // принимает данные
        case NAME:
            return {
                ...state,
                name: action.payload
            }
        // использует данные из state
        case INCREMENT:
            return {
                ...state,
                value: state.value + 1
            }
        default:
            return state;
    }
};

export default reducerStarter;
