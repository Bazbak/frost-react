import './App.css';
import Button from './ui/button/Button';
import ProductListFigma from './components/product_list/ProductListFigma';
import FilterNow from "./features/filter/filter";
import ProductList from "./features/productList/ProductList";
import DropFunc from "./features/dropMenu/dropDown";
import {configureStore} from "@reduxjs/toolkit";
import ProductItem from "./components/product_item/ProductItem";
import DropItem from "./components/categories/Filter";
import CompresorBuild from "./components/categories/DropBox";
import UiDropBox from "./ui/uiDetails/UiDropBox";
import DropBox from "./components/categories/DropBox";
import MainPage from "./components/categories/MainPage";
import Header from "./components/categories/Header";
import Footer from "./components/categories/Footer";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="App">
        <Header/>
        <Outlet/>
        <Footer/>
    </div>
  );
}

export default App;
