import useModal from "../../components/Hooks/useModal";
import ModalWindow from "./ModalWindow";
import Inputs from "../../components/categories/Basket/inputs";

function ModalRegister() {
    const [visible, open, close] = useModal();

    return (
        <ModalWindow>
            <div>
                <h2>Создание учетной записи</h2>
                <div>
                    <Inputs/>
                    <Inputs/>
                    <Inputs/>
                    <Inputs/>
                    <Inputs/>
                </div>
                <div>
                    <a>Зарегистрироваться</a>
                    <div>Авторизация</div>
                </div>
            </div>
        </ModalWindow>
    )
}

export default ModalRegister;