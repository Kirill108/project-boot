/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './App';
import { films } from './Redux/reducers';

const store = createStore(films);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <Provider store={store}>
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </Provider>
);
