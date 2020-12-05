import { createStore } from 'redux';

const reduxNative = () => {
    // 1. STORE (создание store)
    const store = createStore(changeStore);

    // 2. REDUCER
    function changeStore(state = [], action) {
        switch (action.type) {
            case 'ADD_PRODUCT': {
                return [...state, action.payload];
            }
            default: {
                return state;
            }
        }
    }

    // 3. COMPONENT (подписка и получение состояния store)
    store.subscribe(() => {
        console.log(store.getState());
    });

    // 4. COMPONENT (обновление состояния store)
    store.dispatch({ type: 'ADD_PRODUCT', payload: 'Product1' });
    store.dispatch({ type: 'ADD_PRODUCT', payload: 'Product2' });
}

reduxNative();
