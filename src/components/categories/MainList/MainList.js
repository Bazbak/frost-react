import img1 from './images/5003-01.png'
import img2 from './images/5003-01(small).png'
import img3 from './images/5003-02(small).png'
import img4 from './images/5003-03(small).png'
import img5 from './images/5003-04(small).png'
import img6 from './images/5003-03(big).png'
import { useEffect, useState } from "react";
import KiaAndHundia from "../KiaAndHundai";
import axios from "axios";
import ModalWindow from "../../../ui/uiDetails/ModalWindow";
import Modalka from "../../../ui/uiDetails/Modalka";
import useModal from "../../Hooks/useModal";
import { useParams } from "react-router-dom";



const PRODUCT_ID = 7;


function MainList(props) {
    let poster = img1;
    let lable = img6;
    let arr = [img1, img2, img3, img4, img5];


    const [visible, open, close] = useModal();

    const [box, setBoxes] = useState({
        code: undefined,
        manufacturer: undefined,
        description: undefined,
        name: undefined,
        price: undefined
    });

    const [reviews, setReviews] = useState([])


    useEffect(() => {
        axios.get('http://frost.runtime.kz/reviews?productId=1')
            .then(response => {
                let data = response.data;
                setReviews(data
                    //     data.map((i) => {
                    //     return i;
                    //         id: i.id,
                    //         user: {
                    //             id: i.id,
                    //             email: i.email,
                    //             firstName: i.firstName,
                    //             lastName: i.lastName,
                    //         },
                    //         review: i.review,
                    //         createdAt: i.createdAt,
                    // })
                );
            })
    }, []);

    useEffect(() => {
        axios.get('http://frost.runtime.kz/products/' + params.id)
            .then(response => {
                let data = response.data;
                setBoxes(data)
            })
    }, []);

    console.log(reviews.map((i) => i.review))
    console.log(reviews.map((i) => i))


    const [firstImg, setImg] = useState([img2, img3, img4, img5]);
    const [logo, setLogo] = useState(poster)


    function clickImg(index) {
        console.log(firstImg[index])
        setLogo(firstImg[index])
        // {
            // let newBox = [...prev];
            // newBox = firstImg[index]
            // // newBox[index] = img6
            // return newBox
        // }
        // )
    }

    const params = useParams();

    return (
        <div style={{ padding: '15px', margin: '0 auto' }} className='col-7'>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '35px' }}>
                <div style={{ width: '30%', display: 'flex', flexDirection: 'column' }}>
                    <img style={{ marginBottom: '10px' }} src={logo}/>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        {/*<img style={{marginBottom: '10px'}} src={poster}/>*/}
                        {firstImg.map(function (item, index) {
                            return (
                                <div key={index}>
                                    <img src={item} onClick={() => clickImg(index)}/>
                                    {/*<img src={img3} onClick={(index) => clickImg(index)}/>*/}
                                    {/*<img src={img4}/>*/}
                                    {/*<img src={img5}/>*/}
                                </div>
                            )
                        })}
                        {/*<div style={{display: 'flex', justifyContent: 'space-between',}}>*/}
                        {/*    <img src={img2}/>*/}
                        {/*    <img src={img3} onClick={(index) => clickImg(index)}/>*/}
                        {/*    <img src={img4}/>*/}
                        {/*    <img src={img5}/>*/}
                        {/*</div>*/}
                    </div>
                    <div>
                        <p>Применимы к автомобилям:</p>
                        <div style={{ background: 'f4f4f4', border: '1px solid #e5e5e5' }}>
                            <KiaAndHundia/>
                            {/*<div>Kia</div>*/}
                            {/*<div>Hundai</div>*/}

                        </div>
                    </div>
                </div>
                <div style={{ width: '66%', position: 'relative' }}>
                    <div className='marginBot150px'>
                        <div style={{ display: 'flex' }}>
                            <h2 style={{ width: '50%' }}>
                                {box.name}
                            </h2>
                            <div
                                style={{
                                    width: '270px',
                                    height: '255px',
                                    position: 'absolute',
                                    background: '#EDEDED',
                                    right: '0'
                                }}>
                                <Modalka visible={visible} close={close}/>
                                <h2>300</h2>
                                <div>В наличии</div>
                                <p>г. Астана</p>
                                <p>г. Алматы</p>
                                <div>
                                    <a onClick={open}>Купить</a>
                                </div>
                            </div>
                        </div>
                        <p style={{ width: '50%' }}>
                            {box.code}
                            {/*{params.id}*/}
                        </p>
                        <p style={{ width: '50%' }}>
                            {box.manufacturer}
                        </p>
                        <p style={{ width: '50%' }}>
                            {box.description}
                        </p>
                    </div>
                    <div className='marginBot150px'>
                        <h3>Отзывы</h3>
                        <div className='marginBot20'>Чтобы оставить отзыв <span
                            className='styleLink'>войдите на сайт</span>
                        </div>
                        <div>
                            {/*<div className='padding20 borderE5 marginBot20'>*/}
                            {/*    /!*<h3>{reviews.map}</h3>*!/*/}
                            {/*    /!*<h3>{reviews.user.lastName}</h3>*!/*/}
                            {/*    <div>Несколько лет покупаю запчасти в этом магазине, ребята очень быстро подбирают, что*/}
                            {/*        нужно и*/}
                            {/*        по адекватным ценам. Спасибо, что выручаете! Смело рекомендую своим знакомым.*/}
                            {/*    </div>*/}
                            {/*</div>*/}
                            {/*<div className='padding20 borderE5 marginBot20'>*/}
                            {/*    <h3>Дмитрий О.</h3>*/}
                            {/*    <div>*/}
                            {/*        {reviews.map((i) => i.review)}*/}
                            {/*    </div>*/}
                            {/*</div>*/}
                        </div>
                        <div>
                            {reviews.map((item, index) => {
                                return (
                                    <div className='padding20 borderE5 marginBot20'>
                                        <div>
                                            <span>{item.user.firstName}</span>
                                            <span>{item.user.lastName}</span>
                                        </div>
                                        <div>{item.review}</div>
                                    </div>
                                )
                            })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainList