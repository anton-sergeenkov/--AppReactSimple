import store from '../redux/store';
import { setIncrement } from '../redux/actions';

const reduxNative = () => {

	// 1. Получить state
	const state1 = store.getState();

	// 2. Подписаться на изменение state
	store.subscribe(() => {
		const state = store.getState();
		console.log(state);
	})

	// 3. Изменить state
	store.dispatch(setIncrement());
	store.dispatch(setIncrement());
	store.dispatch(setIncrement());
}

// reduxNative();

// State 0
// {
// 	reducerStarter: { value: 0 },
// 	reducerAsyncData: { items: [], isFetching: false }
// }

// State 1
// {
// 	reducerStarter: { value: 1 },
// 	reducerAsyncData: { items: [], isFetching: false }
// }
