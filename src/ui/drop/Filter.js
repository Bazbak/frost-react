import { useEffect, useState, useRef } from "react";

function Filter({ items, onChanger }) {
    const [blockDrop, setBlockDrop] = useState(false);
    const [dropAuto, setDropAuto] = useState(
        [items.arr[0].text]
        // items.arr.map(product => {
        //     return {name: product.text, selected: false}
        // })
    );

    const [colors, setColors] = useState('red');
    const dropDownRef = useRef();

    // console.log('--- items --- ');
    // console.log(items.arr);

    // useEffect(function () {
    //     setDropAuto(items.arr.map(product => {
    //         return {name: product.name, selected: false}
    //     }));
    // }, [items.arr]);
    let box = [];
    //
    // dropBox.forEach((item, index) => {
    //     box.push(<span key={index}>{item.name}</span>)
    // })
    //
    // dropBox.forEach((item, index) => {
    //     // console.log(item)
    //     box.push(<span onClick={() => {
    //         console.log(item);
    //         if (onChange !== undefined) {
    //             onChange(item.id);
    //         }
    //     }} key={index}>{item.name}</span>)
    // })
    //
    // console.log(items)

    items.arr.map((item, index) => {
        // console.log(item)
        box.push(<span style={{
            padding: '10px',
            cursor: 'pointer',
            borderBottom: '1px solid rgb(211, 211, 211)',
            // backgroundColor:  ,
            backgroundColor: dropAuto === item.text ? 'red' : '' || item.value === 0 ? colors : '',
        }} onClick={() => {
            setDropAuto(item.text)
            setColors('')
            setBlockDrop(false)
            if (onChanger !== undefined) {
                onChanger(item.value);
            }
        }} key={index}>{item.text}</span>)
    })

    useEffect(function () {
        setDropAuto([items.arr[0].text])
    }, [items.arr]);


    useEffect(() => {
        document.addEventListener('click', (event) => {
            // console.log(dropDownRef.current)
            // console.log(event.target)
            if (dropDownRef.current !== event.target){
                setBlockDrop(false)
            }
        })
    }, [])

    // items.arr.forEach((item, index) => {
    //     // console.log(item.text === 'Все марки')
    //     box.push(<span onClick={() => {
    //         if (onChanger !== undefined) {
    //             onChanger(item.value);
    //             console.log(item.value)
    //         }
    //     }} key={index}>{item.text}</span>)
    // })

// console.log(items)
    return (
        <div className='Dropp'
             onClick={() => setBlockDrop(!blockDrop)}

             style={{
                 backgroundColor: '#f6f6f6',
                 margin: '25px',
                 position: 'relative',
                 outline: '1px solid rgb(211, 211, 211)',
             }}>
            <div
                ref={dropDownRef}
                // onClick={() => {setBlockDrop(!blockDrop)}}
                style={{
                    width: '250px',
                    cursor: 'pointer',
                    padding: '10px',
                    backgroundColor: '#f6f6f6',
                }}
            >
                {dropAuto}
                {/*{items.group}*/}
                {/*{console.log()}*/}
                {/*{items.arr[0].text}*/}
            </div>
            {/*<div style={{*/}
            {/*    padding: '0px 135px 0px 0px',*/}
            {/*    backgroundColor: '#f6f6f6',*/}
            {/*}}*/}
            {/*     onClick={() => {*/}
            {/*         onChanger(0)*/}
            {/*         console.log(123)*/}
            {/*     }}*/}
            {/*>*/}
            {/*    {items.reload}*/}
            {/*</div>*/}
            <div
                style={{
                    display: blockDrop === true ? 'flex' : 'none',
                    left: '0',
                    top: '100%',
                    flexDirection: 'column',
                    zIndex: '1',
                    background: 'white',
                    width: '100%',
                    outline: '1px solid rgb(211, 211, 211)',
                    position: 'absolute',
                }}
            >
                {box}
            </div>
        </div>
    )
}

export default Filter;


// function clickBlock() {
//     setBlockDrop(function () {
//         if (!blockDrop) {
//             return true;
//         }
//     })
// }

// onClick={clickBlock}>
