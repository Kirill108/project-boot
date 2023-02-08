import { createBrowserRouter } from 'react-router-dom';
import App from '../app';
import { Header } from '../header/header';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Header />,
        children: [
            { index: true, element: <App /> },
            // {
            //     path: 'weather',
            //     element: <App />,
            // },
            // {
            //     path: 'help',
            //     element: <Help />,
            // },
        ],
    },
]);
