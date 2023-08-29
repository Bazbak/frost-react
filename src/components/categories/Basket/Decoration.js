import './decStyle.css'
import Inputs from "./inputs";

function Decoration() {
    return (
        <div className='marginAuto'>
            <div className='flex' style={{width: '70%', margin: '0 auto'}}>
                <h2>Оформление заказа</h2>
                <div className='paddingBasket'>Корзина</div>
                <div className='paddingBasket'>Контактные данные</div>
                <div className='paddingBasket'>Доставка</div>
                <div className='paddingBasket'>Завершение</div>
            </div>
            <div className='padding50 backWhite marginTop25px' style={{width: '70%', margin: '0 auto'}}>
                <h2>Контактные данные</h2>
                <div className='displayFlex'>
                    <div className='width45'>
                        <h3>Фамилия</h3>
                        <Inputs items={'123'}/>
                        <h3>Имя</h3>
                        <form><input className='widthInput'/></form>
                        <h3>Отчество</h3>
                        <form><input className='widthInput'/></form>
                        <h3>Телефон</h3>
                        <form><input className='widthInput'/></form>
                    </div>
                    <div className='line'>
                        <div></div>
                    </div>
                    <div className='width45'>
                        <h3>E-mail</h3>
                        <form><input className='widthInput'/></form>
                        <h3>Пароль</h3>
                        <form><input className='widthInput' disabled={true}/></form>
                        <h3>Повторите пароль</h3>
                        <form><input className='widthInput' disabled={true}/></form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Decoration;