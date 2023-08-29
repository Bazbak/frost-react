import Inputs from "../../components/categories/Basket/inputs";
import './Blackback.css'
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";


function ModalWindow({ visible, close, children }) {
    // const [box, setBoxes] = useState(props.style);
    //
    // useEffect(() => {
    //     setBoxes(props.style);
    // }, [props.style]);

    console.log('--- modal visible ---');
    console.log(visible);

    if (visible) {
        return createPortal(
            (
                <div>
                    <div className='stylesLogin'
                        // style={{background: 'rgb(0 0 0 / 80%)', width: '100%', height: '100%', left: '0', position: 'absolute'}}
                        // style={{ display: box === true ? 'block' : 'none', border: '1px solid gray', }}
                    >
                        {children}
                    </div>
                    <div className='closeBack' onClick={close}>
                        {/*     onClick={() => {*/}
                        {/*    // setBoxes(false)*/}
                        {/*    // props.arg();*/}
                        {/*}}*/}
                        {/*     // style={{display: box === true ? 'block' : 'none', background: 'rgb(0 0 0 / 80%)', width: '100%', height: '100%', left: '0', position: 'absolute'}}*/}
                        {/*>*/}
                    </div>
                </div>
            ), document.body
        );
    } else {
        return null
    }
}

export default ModalWindow;
