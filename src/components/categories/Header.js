import img from "../product_list/images/Frost logo.png";
import imgGlass from "../product_list/images/Group 9.png";
import ModalWindow from "../../ui/uiDetails/ModalWindow";
import Inputs from "./Basket/inputs";
import imgKorzina from "../product_list/images/Group 2.png";
import blue from "../product_list/images/Rectangle 2.png";
import useModal from "../Hooks/useModal";
import { Link } from "react-router-dom";

function Header() {
    const [visible, open, close] = useModal();
    const [visible2, open2, close2] = useModal();

    return (
        <div className="productList" style={{ backgroundColor: 'black' }}>
            <div style={{ display: "flex" }} className='container'>
                <div style={{ display: "flex", justifyContent: 'space-around' }} className='container'>
                    <div>
                       <Link to={'/'}>
                           <img src={img} className='imgLogo'/>
                       </Link>
                    </div>
                    <div className='cityAndPhone'>
                        <div>
                            <div className='paddingPhoneCity'>г. Нур-Султан</div>
                            <div className='paddingPhoneCity'>г. Алматы</div>
                        </div>
                        <div>
                            <div className='paddingPhoneCity boxNth'>+7 777 777 77 77</div>
                            <div className='paddingPhoneCity boxNth'>+7 777 777 77 77</div>
                        </div>
                        <form className='box1'>
                            <input className='inputGrow' placeholder='Поиск по каталогу ....'/>
                            <img src={imgGlass} className='glass'/>
                        </form>
                        <div style={{ textAlign: "center" }}>
                            <ModalWindow visible={visible} close={close}>
                                <h2>Авторизация</h2>
                                <Inputs items={'Email'}/>
                                <Inputs/>
                                <p>Забыли пароль</p>
                                <div>
                                    <a>Войти</a>
                                    <a>Регистрация</a>
                                </div>
                            </ModalWindow>
                            <div style={{ color: 'white', display: 'flex', flexDirection: 'column' }}>
                                <a onClick={open}>Вход в личный кабинет</a>
                                <a onClick={open2}>Зарегистрироваться</a>
                            </div>
                        </div>
                        <div>
                            <div className='cityAndPhone' style={{ marginLeft: '15px', position: 'relative' }}>
                                <img src={imgKorzina}/>
                                <div className='two'>2</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <img style={{ display: "flex", width: '100%' }} src={blue}/>
            </div>
        </div>
    )
}

export default Header;