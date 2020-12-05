import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

import { logger } from './middleware';

export default createStore(
	rootReducer,
	composeWithDevTools(
		applyMiddleware(thunk, logger)
	)
);
