import useModal from "../../components/Hooks/useModal";
import Modalka from "./Modalka";
import ModalWindow from "./ModalWindow";

function ButtonBuy(props) {

    return (
        <div
            style={{
                padding: '8px 50px 8px 50px',
                backgroundColor: '#2156bd',
                color: 'white',
                display: 'flex',
                fontSize: '16px'
            }}
            onClick={props.onClick}
        >
            Купить
        </div>
    )
}

export default ButtonBuy;
