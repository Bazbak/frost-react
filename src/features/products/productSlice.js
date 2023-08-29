import {createSlice} from "@reduxjs/toolkit";
import FilterNow from "../filter/filter";
import filter from "../filter/filter";


const productSLice = createSlice({
    name: 'products',
    initialState: {
        filter: {
            minPrice: undefined,
            maxPrice: undefined 
        },
        items: [
            {id: 1, category: 'car', name: 'porshe', price: 15},
            {id: 2, category: 'phone', name: 'apple', price: 20},
            {id: 3, category: 'city', name: 'London', price: 10},
        ],
    },
    reducers: {
        addProduct: (state, action) => {
            // console.log(action);

            let maxId = state.items[0].id;

            for (let i = 1; i < state.items.length; i++) {
                if (state.items[i].id > maxId) {
                    maxId = state.items[i].id
                }
            }
            action.payload.id = maxId + 1;
            return {...state, items: [...state.items, action.payload]};
        },
        addFilter: (state, action) => {
            state.filter = action.payload;
        },
        newPrice: (state, action) => {
            for (let i = 0; i < state.items.length; i++){
                if (state.items[i].id === action.payload.id) {
                    state.items[i] = action.payload;
                    break;
                }
            }
        },
        deleteButton: (state, action) => {
            // console.log(action);
            for (let i = 0; i < state.items.length; i++) {
                if (state.items[i].id === action.payload) {
                    state.items.splice(i, 1);
                }
            }
        }
    },
});

export const selectProducts = state => state.products;
export const selectFilterProducts = state => {
    let filter = state.products.filter;
    if (filter.minPrice === undefined || filter.maxPrice === undefined) {
        return state.products.items;
    }
    return state.products.items.filter(item => {  
        return filter.minPrice < item.price && filter.maxPrice > item.price;
    });
}


export const {addProduct} = productSLice.actions;
export const {newPrice} = productSLice.actions;
export const {addFilter} = productSLice.actions;
export const {deleteButton} = productSLice.actions;

export default productSLice.reducer;


// addProduct
// - action -> {
//     type: 'products/addProduct',
//     payload:
// }

