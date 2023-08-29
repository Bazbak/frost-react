import React, { useEffect, useState } from "react";


function Check(props) {

    const [checkPower, setCheckPower] = useState(false);

    useEffect(() => {
        props.onCheck(checkPower)
    }, [checkPower])



    return (
        <div style={{ display: 'flex', alignItems: 'center', background: 'white', width: '100%' }}>
            <input type={"checkbox"} style={{ marginTop: '-50px' }} onClick={() => setCheckPower(!checkPower)}/>
            <span style={{ marginTop: '-50px', paddingBottom: '5px' }}>в наличии</span>
        </div>
    )
}

export default Check;