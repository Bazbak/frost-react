import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from "react-redux";
import { store } from "./app/store";
import MainList from "./components/categories/MainList/MainList";
import { createBrowserRouter, Form, Outlet, RouterProvider } from "react-router-dom";
import ProductListFigma from "./components/product_list/ProductListFigma";
import Header from "./components/categories/Header";
import Footer from "./components/categories/Footer";
import MainPage from "./components/categories/MainPage";

const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        children: [
            {
                index: true,
                element: <MainPage/>
            },
            // {
            //     path: '/cart',
            //     element: <MainList/>,
            // },
            {
                path: '/product/:id',
                element: <MainList/>
            }
        ]
    },
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>

        <Provider store={store}>
            <RouterProvider router={router}/>
        </Provider>
    </>
);
