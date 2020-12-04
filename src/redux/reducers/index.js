import { combineReducers } from 'redux';

import reducerStarter from './reducer-starter';
import reducerAsyncData from './reducer-async-data';

export default combineReducers({
    reducerStarter,
    reducerAsyncData
});
