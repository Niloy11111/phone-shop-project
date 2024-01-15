import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../MainLayout/MainLayout';
import HomePage from '../Pages/HomePage';
import Favorites from '../Pages/Favorites';
import Login from '../Pages/Login';
import Phones from '../Phones/Phones';
import PhoneDetails from '../PhoneDetails/PhoneDetails';

const myCreatedRoute = createBrowserRouter([
    {
        path : '/',
        element : <MainLayout></MainLayout>,
        children : [
            {
                path : "/",
                loader : () => fetch('phones.json') ,
                element : <HomePage></HomePage>
            },
            {
                path : "/favorites",
                element : <Favorites></Favorites> 
            },
            {
                path : "/login",
                element : <Login></Login>
            },
            {
                path : "/phoneDetails/:id",
                loader : () => fetch('phones.json'), 
                element : <PhoneDetails></PhoneDetails>
            }
            
        ]
    }
])

export default myCreatedRoute;