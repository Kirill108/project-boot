/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './app';
import { filmsApp } from './redux/reducers/combine-reducers';
import { composeWithDevTools } from 'redux-devtools-extension';
import { router } from './routes/router.jsx';
import { RouterProvider } from 'react-router-dom';
import { configureStore } from '@reduxjs/toolkit'

// const store = createStore(filmsApp, composeWithDevTools());
const store = configureStore({
    reducer: filmsApp,
  })

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <Provider store={store}>
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </Provider>
//     <Provider store={store}>
//     <React.StrictMode>
//         <RouterProvider router={router} />
//     </React.StrictMode>
// </Provider>
);
