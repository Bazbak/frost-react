import {useState} from "react";
import {useDispatch} from "react-redux";
import {addProduct} from "../products/productSlice";

function Add(props) {

    const [main, setMain] = useState(props.product);
    console.log(props.addProd)
    const [products, setProduct] = useState({
        name: '',
        price: '',
        category: ''
    });

    const dispatch = useDispatch();

    function submitFormHandler(event) {
        event.preventDefault();
        dispatch(addProduct({name: products.name, price: products.price, category: products.category}));
    }

    function addItemName(event) {
        setProduct(function (prevProd) {
            return {...prevProd, name: event.target.value.trim()}
        })
    }

    function addItemPrice(event) {
        setProduct(function (prevProd) {
            return {...prevProd, price: event.target.value.trim()}
        })
    }

    function addItemCategory(event) {
        setProduct(function (prevProd) {
            return {...prevProd, category: event.target.value.trim()}
        })
    }

 

    return (
        <form onSubmit={submitFormHandler}>
            <input type="text" value={products.name} onChange={addItemName}/>
            <input type="text" value={products.price} onChange={addItemPrice}/>
            <input type="text" value={products.category} onChange={addItemCategory}/>
            <button type="submit">Добавить товар</button>
        </form>
    );
}

export default Add;

