import ModalWindow from "./ModalWindow";
import { useState } from "react";

function Modalka({ visible, close, addProps }) {
    const [count, setCount] = useState(0);


    return (
        <ModalWindow visible={visible} close={close}>
            <div>Товар добавлен в корзину</div>
            <div>
                {addProps}
            </div>
            <div>компрессор кондиционера</div>
            <div>Укажите количество:
                <span onClick={() => setCount(count + 1)}>+</span>
                <span>{count}</span>
                <span onClick={() => setCount(count - 1)}>-</span>
            </div>
        </ModalWindow>
    )
}

export default Modalka;
