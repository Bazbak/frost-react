import DropItem from "./Filter";
import Check from "../../ui/uiDetails/Check";
import UiDropBox from "../../ui/uiDetails/UiDropBox";
import { useEffect, useState } from "react";
import axios from "axios";
import ProductItem from "../product_item/ProductItem";

function MainPage (){
    const [cat, setCat] = useState({
        brandId: undefined,
        modelId: undefined,
        generationId: undefined,
        available: false,
    });

    const [page, setPages] = useState({
        currentPages: undefined,
        totalPages: undefined,
    })

    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get('http://frost.runtime.kz/products', {
            params: {
                brandId: cat.brandId,
                modelId: cat.modelId,
                generationId: cat.generationId,
                page: 1,
                size: 4,
                available: cat.available,
            },
        })
            .then(response => {
                let data = response.data;
                // console.log(data)
                setProducts(data.items);
                // console.log(data)
                setPages({
                    currentPages: data.currentPage,
                    totalPages: data.totalPages,
                });
            });
    }, [cat]);

    return (
        <div style={{ backgroundColor: '#f6f6f6', padding: '25px' }}>
            <div style={{ padding: '15px', margin: '0 auto' }} className='col-7'>
                <DropItem onFilterChange={filterParams => {
                    setCat({
                        brandId: filterParams.brand,
                        modelId: filterParams.model,
                        generationId: filterParams.generator,
                        available: cat.available,
                    })
                }}/>
                <Check onCheck={checkBool => {
                    setCat({
                        available: checkBool,
                    })
                }}/>
                <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
                    {products.map(function (product, index) {
                        return (
                            <UiDropBox key={index} items={{ product }}/>
                        )
                    })}
                </div>
            </div>
            <ProductItem style={{ background: 'green' }}
                         totalPages={page.totalPages}
                         currentPage={page.currentPages}
                         onPageChange={(page) => {
                             axios.get('http://frost.runtime.kz/products', {
                                 params: {
                                     brandId: cat.brandId,
                                     modelId: cat.modelId,
                                     generationId: cat.generationId,
                                     page: page,
                                     size: 4,
                                     available: cat.available,
                                 },
                             })
                                 .then(response => {
                                     let data = response.data;
                                     setProducts(data.items);
                                     setPages({
                                         currentPages: data.currentPage,
                                         totalPages: data.totalPages,
                                     });
                                 });
                         }}
            />
        </div>
    )
}

export default MainPage;