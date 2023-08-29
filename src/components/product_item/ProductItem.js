import './ProductItem.css';
import Button from '../../ui/button/Button';
import {useState} from "react";

function ProductItem({currentPage, totalPages, onPageChange}) {

    let arr = [];

    if (totalPages > 8) {


        if (currentPage === 1) {
            arr.push(<button style={{background: 'red'}} onClick={() => onPageChange(1)} key={1}>{1}</button>)
        } else {
            arr.push(<button onClick={() => onPageChange(1)} key={1}>{1}</button>)
        }
        // arr.push(<button onClick={() => onPageChange(1)} key={1}>{1}</button>)

        if (currentPage > 3) {
            arr.push(<span key={'before'}>...</span>)
        }


        if (currentPage - 1 !== 1 && currentPage - 1 !== 0) {
            arr.push(<button onClick={() => onPageChange(currentPage - 1)}
                             key={currentPage - 1}>{currentPage - 1}</button>)
        }

        if (currentPage !== 1 && currentPage !== totalPages) {
            arr.push(<button style={{background: 'red'}} key={currentPage}>{currentPage}</button>)
        }


        if (currentPage + 1 !== totalPages && currentPage + 1 < totalPages) {
            arr.push(<button onClick={() => onPageChange(currentPage + 1)}
                             key={currentPage + 1}>{currentPage + 1}</button>)
        }


        if (currentPage === 1) {
            arr.push(<button onClick={() => onPageChange(currentPage + 2)}
                             key={currentPage + 2}>{currentPage + 2}</button>)
        }

        if (currentPage <= totalPages - 3) {
            arr.push(<span key={'beforeNext'}>...</span>)
        }


        if (currentPage === totalPages) {
            arr.push(<button style={{background: 'red'}} onClick={() => onPageChange(totalPages)}
                             key={totalPages}>{totalPages}</button>)
        } else {
            arr.push(<button onClick={() => onPageChange(totalPages)} key={totalPages}>{totalPages}</button>)
        }
        // arr.push(<button onClick={() => onPageChange(totalPages)} key={totalPages}>{totalPages}</button>)

    } else {
        for (let i = 1; i < totalPages + 1; i++) {
            if (currentPage === i) {
                arr.push(<button style={{background: 'red'}} key={i} onClick={() => onPageChange(i)}>{i}</button>)
            } else {
                arr.push(<button key={i} onClick={() => onPageChange(i)}>{i}</button>)
            }
            // if (i === totalPages - 1) {
            //     arr.push(<button key={i+1} onClick={() => onPageChange(i + 1)}>{i + 1}</button>)
            // }
        }
    }

    let butArr = []

    if (currentPage !== totalPages && totalPages !== 0) {
        butArr.push(<button key={123} onClick={() => onPageChange(currentPage + 1)}>Вперед</button>)
    } else {
        butArr.push(<span key={122}></span>)
    }

    return (
        <div className="ProductItem col-4 pages" style={{width: '100%'}}>
            <div className='col-7' style={{ display: 'flex', justifyContent: 'flex-end', margin: '0 auto' }}>
            {/*{currentPage !== 1 && <button onClick={() => onPageChange(currentPage -1)}>Назад</button>}*/}
            {/*<div>*/}
            {currentPage !== 1 && <button onClick={() => onPageChange(currentPage - 1)}>Назад</button>}
            {arr}
            {butArr}
            {/*{currentPage !== totalPages && <button onClick={() => onPageChange(currentPage +1)}>Вперед</button>}}*/}
            {/*</div>*/}
            {/*{currentPage !== totalPages && <button onClick={() => onPageChange(currentPage +1)}>Вперед</button>}*/}
            {/*{arr.map((num, index) => (*/}
            {/*    <div key={index} className='item' onClick={() => {*/}
            {/*        props.onPageChange(num);*/}
            {/*    }>*/}
            {/*{arr}*/}
            {/*        {num}*/}
            {/*    </div>*/}
            {/*    }))*/}
                </div>
        </div>
    );
}

export default ProductItem;


// при нажатии функции онпейдж прописать запрос к продукт что бы подтянули данные след. страницы