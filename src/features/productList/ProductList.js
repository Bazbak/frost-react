import {useDispatch, useSelector} from "react-redux";
import {selectFilterProducts, selectProducts} from "../products/productSlice";
import Add from "../addProducts/add";
import React, {useState} from "react";
import EditFilter from "../productItem/productItem";
import {deleteButton} from "../products/productSlice";

function ProductList() {
    const dispatch = useDispatch();

    // dispatch(addProduct({id: 5, name: 'Meat', price: 12}));


    const products = useSelector(selectFilterProducts);
    const changePrice = useSelector(selectProducts);

    const [item, setItem] = useState(undefined)


    function checkFilter(product) {
        setItem(function () {
            return product;
        });
    }

    function deleteBut (id, event){
        event.stopPropagation();
        dispatch(deleteButton(id));
    }

    return (
        <div>
            <div style={{
            display: 'flex',
        }}>
            <table border={1} cellPadding={5}>
                <thead>
                <tr>
                    <th>Название</th>
                    <th>Цена</th>
                    <th>Категория</th>
                </tr>
                </thead>
                <tbody>
                {products.map(product => {
                    return (
                        <tr key={product.id} onClick={() => checkFilter(product)}>
                            <td className="nameProduct">{product.name}</td>
                            <td>{product.price}</td>
                            <td>{product.category}</td>
                            <td><button type="button" onClick={(event) => deleteBut(product.id, event)}>Удалить</button></td>
                        </tr>
                    )
                })}
                </tbody>
            </table>
            {
                item !== undefined
                ? <EditFilter product={item}/>
                : ''
            }
            </div>
            <div style={{display: 'flex'}}>
             {
                item === undefined
                ? <div>Выберите товар</div>
                : ''
             }
            {/*{*/}
            {/*    item !== undefined*/}
            {/*    ? <Add addProd = {item}/>*/}
            {/*    : ''*/}
            {/*}*/}
            </div>
        </div>
    );
}

export default ProductList;
