import {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import {newPrice} from "../products/productSlice";

function EditFilter(props) {
    const [inputUser, setInputUser] = useState(props.product);
    // console.log(props)
    let dispatch = useDispatch();

    function editPrice(event) {
        dispatch(newPrice(inputUser));
    }


    useEffect(function () {
        setInputUser(function () {
            return props.product
        })
    }, [props.product])

    function inputUpdateName(event) {
        return setInputUser((prevInput) => ({
            ...prevInput, name: event.target.value
        }));
    }

    function inputUpdateCategory(event) {
        return setInputUser((prevInput) => ({
            ...prevInput, category: event.target.value
        }));
    }

    function inputUpdatePrice(event) {
        return setInputUser((prevInput) => ({
            ...prevInput, price: event.target.value
        }));
    }


    return (
        <div>
            <form style={{
                display: 'flex',
                flexDirection: 'column',
            }}>
                <input type="text" value={inputUser.name} onChange={inputUpdateName}/>
                <input type="text" value={inputUser.category} onChange={inputUpdateCategory}/>
                <input type="text" value={inputUser.price} onChange={inputUpdatePrice}/>
            </form>
            <button type="button" onClick={editPrice}>Изменить</button>
        </div>
    )
}

export default EditFilter;


