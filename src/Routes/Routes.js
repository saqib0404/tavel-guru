import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import Home from '../components/Home/Home';
import Main from '../layout/Main';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
            },
        ]
    }
])
const Routes = () => {
    return (
        <div>

        </div>
    );
};

export default Routes;