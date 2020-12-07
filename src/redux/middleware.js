import { NAME } from './actionTypes';
import { setName } from './actions';

export const logger = (store) => {
    return function (next) {
        return function (action) {
            console.log('Action', action);
            console.log('Prev State', state.getState());

            const newState = next(action);
            console.log('New State', state.getState());
            return newState;
        }
    }
}

export const forbiddenWords = (store) => {
    return function (next) {
        return function (action) {
            const forbidden = ['Jack'];

            if (action.type === NAME) {
                const found = forbidden.filter(w => action.payload.includes(w))
                if (found.length) {
                    return store.dispatch(setName('NoName'));
                }
            }

            return next(action);
        }
    }
}
