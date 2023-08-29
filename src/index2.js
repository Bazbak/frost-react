import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {Provider} from "react-redux";
import {store} from "./app/store";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainList from "./components/categories/MainList/MainList";

const router = createBrowserRouter([
    {
        path: '/cart',
        element: <MainList/>,
    }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RouterProvider router={router}/>
);
