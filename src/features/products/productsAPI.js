const products = [
    {id: 1, category: 'car', name: 'porshe', price: 15},
    {id: 2, category: 'phone', name: 'apple', price: 20},
    {id: 3, category: 'city', name: 'London', price: 10},
];

export function getProducts() {
    return new  Promise(function (resolve){
        setTimeout(function (){
            resolve(products)
        }, 2000);
    });
}

export function createProduct(){

}

export function updateProduct(){

}
