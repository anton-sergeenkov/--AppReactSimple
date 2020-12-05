
export const logger = (state) => {
    return function (next) {
        return function (action) {
            // console.log('Middleware. Action', action);
            // console.log('Middleware. Prev State', state.getState());

            const newState = next(action);
            // console.log('Middleware. New State', state.getState());
            return newState;
        }
    }
}
