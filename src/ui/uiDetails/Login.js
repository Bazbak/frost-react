import { useEffect, useState } from "react";
import Inputs from "../../components/categories/Basket/inputs";
import './styleLogin.css'

function Login (props) {
    const [box, setBoxes] = useState(true)

    // useEffect(() => {
    //     props.onClickMe(box)
    // },[])

    console.log(props)

    return (
        <div className='paddingPhoneCity loginKab' style={{ marginLeft: '10px'}}>
            {props.children}
            {/*<div className='stylesLogin' style={{display: box === true ? 'block' : 'none', }}>*/}
            {/*    <h2>Авторизация</h2>*/}
            {/*    <Inputs/>*/}
            {/*    <Inputs/>*/}
            {/*    <p>Забыли пароль</p>*/}
            {/*    <div>*/}
            {/*        <a>Войти</a>*/}
            {/*        <a>Регистрация</a>*/}
            {/*    </div>*/}
            {/*</div>*/}
        </div>
    )
}

export default Login;