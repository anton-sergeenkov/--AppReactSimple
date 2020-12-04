import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import store from './redux/store';

import App from './components/App/App';
import './styles/index.scss';

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

// testing redux native
import './redux-native/redux-app';
import './redux-native/redux-simple';
