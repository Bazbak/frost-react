import './ProductList.css';
import ProductItem from '../product_item/ProductItem';
import img from './images/Frost logo.png'
import imgGlass from './images/Group 9.png'
import imgKorzina from './images/Group 2.png'
import bg from './images/bg.png'
import space from './images/ivana-cajina-asuyh-_ZX54-unsplash.png'
import blue from './images/Rectangle 2.png'
import DropItem from "../categories/Filter";
import PartsInfo from "../../ui/uiDetails/UiDropBox";
import CompresorBuild from "../categories/DropBox";
import DropBox from "../categories/DropBox";
import ButtonBuy from "../../ui/uiDetails/ButtonBuy";
import insta from './images/Insta.svg'
import Vector from './images/Vector.png'
import Union from './images/Union.svg'
import MainList from "../categories/MainList/MainList";
import axios from "axios";
import { useEffect, useRef, useState } from "react";
import Basket from "../categories/Basket/Basket";
import UiDropBox from "../../ui/uiDetails/UiDropBox";
import Check from "../../ui/uiDetails/Check";
import Decoration from "../categories/Basket/Decoration";
import Login from "../../ui/uiDetails/Login";
import ModalWindow from "../../ui/uiDetails/ModalWindow";
import Inputs from "../categories/Basket/inputs";
import useModal from "../Hooks/useModal";
import MainPage from "../categories/MainPage";


function ProductListFigma() {
    const [logBox, setLogBox] = useState(false)
    const [logBox2, setLogBox2] = useState(false)


    const [products, setProducts] = useState([]);

    const [page, setPages] = useState({
        currentPages: undefined,
        totalPages: undefined,
    })

    const [cat, setCat] = useState({
        brandId: undefined,
        modelId: undefined,
        generationId: undefined,
        available: false,
    })

    const [visible, open, close] = useModal();
    const [visible2, open2, close2] = useModal();

    // useEffect(() => {
    //     console.log('--- filters ---');
    //     console.log(cat);
    //     console.log('--- pages ---');
    //     console.log(page);
    // }, [cat]);


    useEffect(() => {
        axios.get('http://frost.runtime.kz/products', {
            params: {
                brandId: cat.brandId,
                modelId: cat.modelId,
                generationId: cat.generationId,
                page: 1,
                size: 4,
                available: cat.available,
            },
        })
            .then(response => {
                let data = response.data;
                // console.log(data)
                setProducts(data.items);
                // console.log(data)
                setPages({
                    currentPages: data.currentPage,
                    totalPages: data.totalPages,
                });
            });
    }, [cat]);


    // useEffect(() => {
    //
    //     axios.get('http://frost.runtime.kz/categories', {
    //         params: {
    //
    //         }
    //     })
    // })


    function x() {
        setLogBox(false)
    }

    return (
        <div style={{ backgroundColor: '#f6f6f6' }}>
            <div className="productList" style={{ backgroundColor: 'black' }}>
                <div style={{ display: "flex" }} className='container'>
                    <div style={{ display: "flex", justifyContent: 'space-around' }} className='container'>
                        <div>
                            <img src={img} className='imgLogo'/>
                        </div>
                        <div className='cityAndPhone'>
                            <div>
                                <div className='paddingPhoneCity'>г. Нур-Султан</div>
                                <div className='paddingPhoneCity'>г. Алматы</div>
                            </div>
                            <div>
                                <div className='paddingPhoneCity boxNth'>+7 777 777 77 77</div>
                                <div className='paddingPhoneCity boxNth'>+7 777 777 77 77</div>
                            </div>
                            <form className='box1'>
                                <input className='inputGrow' placeholder='Поиск по каталогу ....'/>
                                <img src={imgGlass} className='glass'/>
                            </form>
                            <div style={{ textAlign: "center" }}>
                                <ModalWindow visible={visible} close={close}>
                                    <h2>Авторизация</h2>
                                    <Inputs items={'Email'}/>
                                    <Inputs/>
                                    <p>Забыли пароль</p>
                                    <div>
                                        <a>Войти</a>
                                        <a>Регистрация</a>
                                    </div>
                                </ModalWindow>
                                <div style={{ color: 'white', display: 'flex', flexDirection: 'column' }}>
                                    <a onClick={open}>Вход в личный кабинет</a>
                                    <a onClick={open2}>Зарегистрироваться</a>
                                </div>
                            </div>
                            <div>
                                <div className='cityAndPhone' style={{ marginLeft: '15px', position: 'relative' }}>
                                    <img src={imgKorzina}/>
                                    <div className='two'>2</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <img style={{ display: "flex", width: '100%' }} src={blue}/>
            </div>
            <MainPage/>
            {/*<div style={{ backgroundColor: '#f6f6f6', padding: '25px' }}>*/}
            {/*    <div style={{ padding: '15px', margin: '0 auto' }} className='col-7'>*/}
            {/*        <DropItem onFilterChange={filterParams => {*/}
            {/*            setCat({*/}
            {/*                brandId: filterParams.brand,*/}
            {/*                modelId: filterParams.model,*/}
            {/*                generationId: filterParams.generator,*/}
            {/*                available: cat.available,*/}
            {/*            })*/}
            {/*        }}/>*/}
            {/*        <Check onCheck={checkBool => {*/}
            {/*            setCat({*/}
            {/*                available: checkBool,*/}
            {/*            })*/}
            {/*        }}/>*/}
            {/*        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>*/}
            {/*            /!*<DropBox/>*!/*/}
            {/*            /!*            <DropBox/>*!/*/}
            {/*            /!*            <DropBox/>*!/*/}
            {/*            /!*            <DropBox/>*!/*/}
            {/*            {products.map(function (product, index) {*/}
            {/*                return (*/}
            {/*                    <UiDropBox key={index} items={{ product }}/>*/}
            {/*                )*/}
            {/*            })}*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}
            {/*<div className='col-7' style={{margin: '0 auto', height: '100vh'}}>*/}
            {/*<div style={{ padding: '15px', margin: '0 auto' }} className='col-7'>*/}
            {/*    <MainList/>*/}
            {/*</div>*/}
            <Decoration/>
            <Basket/>
            {/*</div>*/}
            <div>
                {/*<ProductItem style={{ background: 'green' }}*/}
                {/*             totalPages={page.totalPages}*/}
                {/*             currentPage={page.currentPages}*/}
                {/*             onPageChange={(page) => {*/}
                {/*                 axios.get('http://frost.runtime.kz/products', {*/}
                {/*                     params: {*/}
                {/*                         brandId: cat.brandId,*/}
                {/*                         modelId: cat.modelId,*/}
                {/*                         generationId: cat.generationId,*/}
                {/*                         page: page,*/}
                {/*                         size: 4,*/}
                {/*                         available: cat.available,*/}
                {/*                     },*/}
                {/*                 })*/}
                {/*                     .then(response => {*/}
                {/*                         let data = response.data;*/}
                {/*                         setProducts(data.items);*/}
                {/*                         setPages({*/}
                {/*                             currentPages: data.currentPage,*/}
                {/*                             totalPages: data.totalPages,*/}
                {/*                         });*/}
                {/*                     });*/}
                {/*             }}*/}
                {/*/>*/}
            </div>
            <div style={{ backgroundColor: 'black' }}>
                <div className='container' style={{ display: 'flex', justifyContent: 'space-around', padding: '30px' }}>
                    <div style={{ color: 'white', display: 'flex', alignItems: 'center' }}>
                        <img src={insta}/>
                        <p>frostauto</p>
                    </div>
                    <div style={{ color: 'white', display: 'flex', alignItems: 'center' }}>
                        <img src={Vector}/>
                        <p>frostauto@gmail.com</p>
                    </div>
                    <div style={{ color: 'white', display: 'flex', alignItems: 'center' }}>
                        <img src={Union}/>
                        <div>
                            <p style={{ margin: '0' }}>г. Нур-Султан</p>
                            <p style={{ margin: '0' }}>+7 777 777 77 77</p>
                        </div>
                    </div>
                    <div style={{ color: 'white', display: 'flex', alignItems: 'center' }}>
                        <img src={Union}/>
                        <div>
                            <p style={{ margin: '0' }}>г. Алматы</p>
                            <p style={{ margin: '0' }}>+7 777 777 77 77</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductListFigma;
