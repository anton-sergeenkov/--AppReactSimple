import axios from 'axios';
import { REQUEST_SERVER } from '../constants/api';

import { NAME, INCREMENT, ASYNC_PENDING, ASYNC_SUCCESS } from './actionTypes';

// синхронный action
export const setIncrement = () => ({
    type: INCREMENT
});

// синхронный action в полной записи
export const setName = (name) => {
	// console.log('Action');
	return {
		type: NAME,
		payload: name
	}
}

// асинхронный action
export const getAsyncData = () => (dispatch) => {
	// может быть несколько dispatch
	dispatch({
		type: ASYNC_PENDING
	})

	axios.get(REQUEST_SERVER.URL)
		.then(response => {
			dispatch({
				type: ASYNC_SUCCESS,
				payload: response.data,
			})
		})
		.catch(error => console.log(error));
};
