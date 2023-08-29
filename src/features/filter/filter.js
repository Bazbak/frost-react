import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {selectProducts} from "../products/productSlice";
import {addFilter, getFiltersState} from "../products/productSlice";


function FilterNow() {
    const [filters, setFilter] = useState({
        min: '',
        max: ''
    })

 

    const dispatch = useDispatch()


    function formFilter(event) {
        event.preventDefault();
        dispatch(addFilter({minPrice: filters.min, maxPrice: filters.max}));
    }

    function minFilter(event) {
        setFilter(function (prevFilt) {
            return {...prevFilt, min: event.target.value.trim()}
        })
    }

    function maxFilter(event) {
        setFilter(function (prevFilt) {
            return {...prevFilt, max: event.target.value.trim()}
        })
    }


    return (
        <form onSubmit={formFilter}>
            <input type="text" value={filters.min} onChange={minFilter}/>
            <input type="text" value={filters.max} onChange={maxFilter}/>
            <button type="submit">Отфильтровать</button>
        </form>
    )
}


export default FilterNow;