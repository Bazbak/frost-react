import img from "../product_list/images/Frost logo.png";
import insta from "../product_list/images/Insta.svg";
import Vector from "../product_list/images/Vector.png";
import Union from "../product_list/images/Union.svg";

function Footer () {
    return (
        <div style={{ backgroundColor: 'black' }}>
            <div className='container' style={{ display: 'flex', justifyContent: 'space-around', padding: '30px' }}>
                <div style={{ color: 'white', display: 'flex', alignItems: 'center' }}>
                    <img src={insta}/>
                    <p>frostauto</p>
                </div>
                <div style={{ color: 'white', display: 'flex', alignItems: 'center' }}>
                    <img src={Vector}/>
                    <p>frostauto@gmail.com</p>
                </div>
                <div style={{ color: 'white', display: 'flex', alignItems: 'center' }}>
                    <img src={Union}/>
                    <div>
                        <p style={{ margin: '0' }}>г. Нур-Султан</p>
                        <p style={{ margin: '0' }}>+7 777 777 77 77</p>
                    </div>
                </div>
                <div style={{ color: 'white', display: 'flex', alignItems: 'center' }}>
                    <img src={Union}/>
                    <div>
                        <p style={{ margin: '0' }}>г. Алматы</p>
                        <p style={{ margin: '0' }}>+7 777 777 77 77</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;