import React, {useState} from "react";


function DropFunc(props) {
    const [inlineBlock, setInline] = useState(false)
    const [stateInput, setStateInput] = useState('');
    const [droped, setDroped] = useState(
        props.items.map(product => {
            return {name: product, selected: false}
        }));


    function onInline() {
        setInline(function () {
            if (!inlineBlock) {
                return true;
            }
        })
    }


    function clickMe(index) {
        setDroped((prevDrop) => {
            let newHand = [...prevDrop];
            newHand[index].selected = newHand[index].selected === false;
            return newHand;
        })
    }

    function search(event){
        setStateInput(function (){
            return event.target.value;
        })
    }

    let pushName = [];

    droped.forEach((item, index) => {
        if (item.selected === true) {
            pushName.push(<span key={index}>{item.name}</span>);
        }
        // if (pushName.length === 0) {
        //     pushName.push(<span key={index}>Категории</span>);
        // }
    });

    // console.log(pushName)

    if (pushName.length === 0) {
        pushName = <span>Категории</span>;
    }

    return (
        <div className="mainDiv" style={{margin: '15px'}}>
            <div onClick={onInline}>
                <p>{pushName}</p>
            </div>
            <div
                style={{
                    display: inlineBlock === true ? 'flex' : 'none',
                    flexDirection: 'column',
                }}
            >
                <form>
                    <input type="text" value={stateInput} onChange={search}/>
                </form>
                {props.items.map(function (product, index) {
                    if (product.includes(stateInput)) {
                        return (
                            <div style={{margin: '10px'}} key={index} onClick={() => clickMe(index)}>
                                {product}
                            </div>
                        );
                    }
                })}
            </div>
        </div>
    )
}

export default DropFunc;

// let array = ['1', '2'];
// array = array.map(function (item){
//     return {name:item, selected:false};
// })
//
// console.log(array);
//
//
// expanded: true,
// items: props.items.map(item => ({name: items, selected: false}));

// const [droped, setDroped] = useState(
//     props.items.map(product => {
//         if (stateInput.includes(product)){
//             setDroped((prevDrop) => {
//                 let newX = [...prevDrop, {}]
//                 return newX
//             })
//         }
//         else return (
//             {name: product, selected: false}
//         )
//     })
// );


// console.log(dd.length)


// return dd;
// let x = props.drop.items[index]
// console.log(dd)
// }

// let saa = <div>{props.drop.items}</div>
// let zzz = [];
// zzz.push(<div>a1</div>)
// zzz.push(<div>a2</div>)
// zzz.push(<div>a3</div>)

// let classLine = '';

// if (inlineBlock) {
//     // classLine = 'expanded';
// }


// if (!newHand[index].selected) {
//     newHand[index].selected = true
// } else newHand[index].selected = false
// return newHand