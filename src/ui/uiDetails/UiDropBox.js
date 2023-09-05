import ButtonBuy from "./ButtonBuy";
import firstPhoto from './5003-01.png';
import useModal from "../../components/Hooks/useModal";
import Modal from "bootstrap/js/src/modal";
import Modalka from "./Modalka";
import { Link, useParams } from "react-router-dom";
import MainList from "../../components/categories/MainList/MainList";

let img1 = firstPhoto;

function UiDropBox(props) {
    const [ visible, open, close ] = useModal();
    // console.log(props)

    const params = useParams()

    console.log(params)

    return (
        <div style={{ padding: '15px' }}>
            <Link to={'/product/' + props.items.product.id}>
                <img src={img1}/>
            </Link>
            {/*<Link to={'/cart'}>123</Link>*/}
            <div>{props.items.product.name}</div>
            <div style={{ paddingTop: '15px', display: 'flex', justifyContent: 'space-between', fontSize: '24px' }}>
                {props.items.product.price}
                <div>Id{props.items.product.id}</div>
                <ButtonBuy onClick={open}/>
                <Modalka addProps={props.items.product.name} visible={visible} close={close}/>
            </div>
        </div>
    )
}

export default UiDropBox;
