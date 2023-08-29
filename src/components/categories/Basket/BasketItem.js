import {useState} from "react";

function BasketItem({props, propsIndex, onInd, onInd2, all, del}) {


    return (
        <div>
            <div className='flex'>
                <p className='width70 bold'>Наименование товара</p>
            </div>
            <div className='flex borderBotColor flexBaseline just'>
                    {/*<div className='flex borderBotColor flexBaseline'>*/}
                        <div className='width70'>
                            <p className='marginTopBot20'>
                                {props.name}
                            </p>
                            <p className='marginBot20 color9b' onClick={() => del(propsIndex)}>{props.article}<a className='styleLink'>Удалить из
                                корзины</a></p>
                        </div>
                        <div className='just'>
                            <p className='textCenter'>
                                <p className='width15 textCenter bold'>Количество</p>
                                <span onClick={() => onInd2(propsIndex)}>-</span>
                                {props.count}
                                <span onClick={() => onInd(propsIndex)}>+</span>
                            </p>
                            <div>
                                <p className='width15 textCenter bold'>Цена</p>
                                <p className='width15 textCenter'>
                                    {props.price}
                                </p>
                            </div>
                        {/*</div>*/}
                </div>
                {/*<div className='width70'>*/}
                {/*    <p className='marginTopBot20'>*/}
                {/*        Компрессор кондиционера Hyundai Tucson, Kia Sportage 97701-2E300FD; 0935-03se; Kia*/}
                {/*        Sportage*/}
                {/*        97701-2E300FD; 0935-02*/}
                {/*    </p>*/}
                {/*    <p className='marginBot20 color9b'>Артикул: AC97701 <a className='styleLink'>Удалить из корзины</a></p>*/}
                {/*</div>*/}
                {/*<p className='width15 textCenter'>*/}
                {/*    - 1 +*/}
                {/*</p>*/}
                {/*<p className='width15 textCenter'>*/}
                {/*    110 999 тг.*/}
                {/*</p>*/}
            </div>
        </div>
    )
}

export default BasketItem;

