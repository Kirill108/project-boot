/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './app';
import { filmsApp } from './redux/reducers';
import { composeWithDevTools } from "redux-devtools-extension";


const store = createStore(filmsApp, composeWithDevTools());

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <Provider store={store}>
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </Provider>
);
