import React, { useEffect, useState } from "react";
import Filter from "../../ui/drop/Filter";
import axios from "axios";


function DropItem(props) {
    const [item, setItem] = useState([
        { text: 'Все категории', value: 0 },
    ]);
    const [brands, setBrands] = useState([
        { text: 'Все марки', value: 0 },
    ])
    const [models, setModels] = useState([
        { text: 'Все модели', value: 0 },
    ]);

    const [generations, setGenerations] = useState([
        { text: 'Все поколения', value: 0 },
    ]);

    const [boxes, setBoxes] = useState(
        { brand: undefined, model: undefined, generator: undefined }
    )

    useEffect(() => {
        props.onFilterChange(boxes);
    }, [boxes])


    useEffect(function () {
        axios.get('http://frost.runtime.kz/categories')
            .then(response => {
                let items = response.data.map(i => ({ text: i.name, value: i.id }))
                setItem([...item, ...items]);
            });
    }, []);

    useEffect(function () {
        axios.get('http://frost.runtime.kz/brands')
            .then(response => {
                let items = response.data.map(i => ({ text: i.name, value: i.id }))
                setBrands([...brands, ...items])
            });
    }, []);


    return (
        <div style={{ display: 'flex', backgroundColor: 'white', padding: '25px' }}>
            <div>
                <Filter items={{ arr: item, name: 'Категория', }}
                        onChanger={() => {
                        }}
                />
                <Filter
                    items={{ arr: generations }}
                    onChanger={(num) => {
                        if (num !== 0) {
                            setBoxes({ brand: boxes.brand, model: boxes.model, generator: num })
                        } else {
                            setBoxes({ brand: boxes.brand, model: boxes.model, generator: undefined })
                        }
                        //     if (num !== 0) {
                        //         axios.get('http://frost.runtime.kz/generations', {
                        //             params: {
                        //                 modelId: num,
                        //             },
                        //         })
                        //             .then(response => {
                        //                 let items = response.data.map(i => ({ item: i.name, value: i.id }))
                        //                 setGenerations([{ text: 'Все поколения', value: 0 }, ...items])
                        //             })
                        //     }else setGenerations([{text: 'Все поколения', value: 0 }])
                    }
                    }
                />
            </div>
            <div>
                <Filter items={{ arr: brands, name: 'Марка', reload: 'Все марки' }}
                        onChanger={(num) => {
                            if (num !== 0) {
                                axios.get('http://frost.runtime.kz/models', {
                                    params: {
                                        brandId: num,
                                    },
                                })
                                    .then(response => {
                                        let items = response.data.map(i => ({ text: i.name, value: i.id }));
                                        setBoxes({ brand: num, model: undefined, generator: undefined })
                                        setModels([{ text: 'Все модели', value: 0 }, ...items]);
                                        setGenerations([{ text: 'Все поколения', value: 0 }])
                                        // setBoxes({brand: num, model: undefined, generator: undefined})
                                        // console.log(items)
                                        // items.unshift({ text: "Все модели", value: 0 })
                                        // let data = response.data;
                                        // setModels(data)
                                    });
                            } else {
                                setModels([{ text: 'Все модели', value: 0 }]);
                                setBoxes({brand: undefined, model: undefined, generator: undefined})
                                setGenerations([{ text: 'Все поколения', value: 0 }])
                                // setItem([{item: 'Все категории', value: 0}])
                            }
                        }}
                />
                <Filter
                    // items={{ arr: generations }}
                    // onChanger={(num) => {
                    //     console.log(num)
                    //     if (num !== 0) {
                    //         axios.get('http://frost.runtime.kz/generations', {
                    //             params: {
                    //                 modelId: num,
                    //             },
                    //         })
                    //             .then(response => {
                    //                 let items = response.data.map(i => ({ item: i.name, value: i.id }))
                    //                 setGenerations([{ text: 'Все поколения', value: 0 }, ...items])
                    //             })
                    //     } else setGenerations([{ text: 'Все поколения', value: 0 }])
                    // }
                    // }
                    items={{ arr: models, name: 'Модель', group: 'Все модели' }}
                    onChanger={(num) => {
                        // console.log(num)
                        if (num !== 0) {
                            axios.get('http://frost.runtime.kz/generations', {
                                params: {
                                    modelId: num,
                                },
                            })
                                .then(response => {
                                    let items = response.data.map(i => ({ text: i.name, value: i.id }))
                                    // console.log('--- response ---');
                                    // console.log(items)
                                    setGenerations([{ text: 'Все поколения', value: 0 }, ...items])
                                    setBoxes({ brand: boxes.brand, model: num, generator: undefined })
                                    // console.log('--- generations ---');
                                    // console.log(generations);
                                })
                        } else {
                            setGenerations([{ text: 'Все поколения', value: 0 }]);
                            setBoxes({ brand: boxes.brand, model: undefined, generator: undefined })
                            // setModels([{ text: 'Все модели', value: 0 }]);
                            // setItem([{item: 'Все категории', value: 0}])
                        }
                    }
                    }
                    // onChanger={() => {
                    // }}
                />
            </div>
            {/*<div style={{ display: 'flex', alignItems: 'center' }}>*/}
            {/*    <input type={"checkbox"} style={{ marginTop: '-50px' }}/>*/}
            {/*    <Check logic={(bool => {*/}
            {/*    })}/>*/}
            {/*    <span style={{ marginTop: '-50px', paddingBottom: '5px' }} onClick={true}>в наличии</span>*/}
            {/*</div>*/}
        </div>
    )
}

export default DropItem;
