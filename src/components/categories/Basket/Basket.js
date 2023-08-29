import {useState} from "react";
import BasketItem from "./BasketItem";

function Basket() {
    const [nameItem, setNameItem] = useState(
        [
            {name: 'Компрессор кондиционера', price: 100, article: 'a', count: 1},
            {name: 'Компрессор кондиционера', price: 300, article: 'b', count: 1},
        ]
    )

    let total = 0;
    for (let item of nameItem) {
        total += item.price * item.count;
    }


    return (
        <div className='marginAuto'>
            <div className='flex'>
                <h2>Оформление заказа</h2>
                <div className='paddingBasket'>Корзина</div>
                <div className='paddingBasket'>Контактные данные</div>
                <div className='paddingBasket'>Доставка</div>
                <div className='paddingBasket'>Завершение</div>
            </div>
            <div className='padding50 backWhite marginTop25px'>
                <h2>Корзина</h2>
                {/*<div className='flex'>*/}
                {/*    <p className='width70 bold'>Наименование товара</p>*/}
                {/*    <p className='width15 textCenter bold'>Количество</p>*/}
                {/*    <p className='width15 textCenter bold'>Цена</p>*/}
                {/*</div>*/}
                <div>
                    {/*<BasketItem props={nameItem[0]}/>*/}
                    {/*<BasketItem props={nameItem[1]}/>*/}
                    {nameItem.map((item, index) => (
                        <BasketItem key={index} props={item} propsIndex={index} del={(number) => {
                            let state = [...nameItem];
                            state.splice(index, 1);
                            setNameItem(state);
                        }}
                                    onInd={(num) => {
                                        // setNameItem(item[index].count--)
                                        setNameItem(function (prevProd) {
                                            let newProd = [...prevProd];
                                            newProd[num].count++;
                                            newProd[num].price = newProd[num].price + 100
                                            return newProd;
                                        })
                                    }}
                                    onInd2={(num) => {
                                        // setNameItem(item[index].count--)
                                        console.log(num)
                                        setNameItem(function (prevProd) {
                                            let newProd = [...prevProd];
                                            if (newProd[num].count > 0 || newProd[num].price > 0) {
                                                newProd[num].count--;
                                                newProd[num].price = newProd[num].price - 100;
                                            }
                                            return newProd;
                                        })
                                    }}
                        />
                    ))}
                    {/*<div className='flex borderBotColor flexBaseline'>*/}
                    {/*    <div className='width70'>*/}
                    {/*        <p className='marginTopBot20'>*/}
                    {/*            Компрессор кондиционера Hyundai Tucson, Kia Sportage 97701-2E300FD; 0935-03se; Kia*/}
                    {/*            Sportage*/}
                    {/*            97701-2E300FD; 0935-02*/}
                    {/*        </p>*/}
                    {/*        <p className='marginBot20 color9b'>Артикул: AC97701 <a className='styleLink'>Удалить из*/}
                    {/*            корзины</a></p>*/}
                    {/*    </div>*/}
                    {/*    <p className='width15 textCenter'>*/}
                    {/*        - 1 +*/}
                    {/*    </p>*/}
                    {/*    <p className='width15 textCenter'>*/}
                    {/*        110 999 тг.*/}
                    {/*    </p>*/}
                    {/*</div>*/}
                    {/*<div className='flex borderBotColor flexBaseline'>*/}
                    {/*    <div className='width70'>*/}
                    {/*        <p className='marginTopBot20'>*/}
                    {/*            Компрессор кондиционера Hyundai Tucson, Kia Sportage 97701-2E300FD; 0935-03se;*/}
                    {/*        </p>*/}
                    {/*        <p className='marginBot20 color9b'>Артикул: AC97701 <a className='styleLink'>Удалить из*/}
                    {/*            корзины</a></p>*/}
                    {/*    </div>*/}
                    {/*    <p className='width15 textCenter'>*/}
                    {/*        - 1 +*/}
                    {/*    </p>*/}
                    {/*    <p className='width15 textCenter'>*/}
                    {/*        95 999 тг.*/}
                    {/*    </p>*/}
                    {/*</div>*/}
                    <div>
                        <p className='marginTopBot20'>Способ оплаты</p>
                        <div className='spaceBtw'>
                            <p>Оплата при получении</p>
                            <div className='flex'>
                                <h2 style={{marginRight: '10px'}}>Итого к оплате:</h2>
                                <h2>{total}</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex marginTop25px' style={{justifyContent: 'flex-end'}}>
                <div className='butCheck'>
                    Оформить заказ
                </div>
            </div>
        </div>
    )
}

export default Basket;