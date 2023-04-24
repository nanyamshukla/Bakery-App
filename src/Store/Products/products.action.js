import { FETCH_PRODUCTS, SET_PRODUCTS_LOADER } from './products.types';

const setProductsLoader = (value) => ({
    type: SET_PRODUCTS_LOADER,
    data: value
})

const setProducts = data => ({
    type: FETCH_PRODUCTS,
    data
});


export const fetchProducts = () => {
    return async (dispatch) => {
        dispatch(setProductsLoader(true));
        await new Promise((res) => setTimeout(res, 1000));
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=b')
        .then(res => res.json())
        .then(res => {
            const products = res.meals;
            products.forEach(product => product.price = Math.floor(5 + Math.random()*25));
            dispatch(setProducts(products));
            dispatch(setProductsLoader(false));
        })
    };
};