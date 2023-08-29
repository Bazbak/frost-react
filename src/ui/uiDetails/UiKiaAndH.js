import {useState} from "react";

function UiKiaAndH(props) {
const [parts, setParts] = useState(
    props.items.obj.arr1.map (item => {
        return {name: item, selected: false}
    }))


        return(
            <div>
                {/*{props.items.obj.name}*/}
                {/*{props.items.obj.arr1.map(part => {*/}
                {/*    return (*/}
                {/*        {part}*/}
                {/*    )*/}
                {/*})}*/}
            </div>
        )
}

export default UiKiaAndH;