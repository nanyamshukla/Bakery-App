import {
    FETCH_PRODUCTS,
    SET_PRODUCTS_LOADER
} from './products.types';

const initState = {
    loading: false,
    products: []
};

const productsReducer = (state = initState, action) => {
    switch (action.type) {
        case FETCH_PRODUCTS:
            return {
                ...state,
                products: [...state.products, ...action.data] || []
            };
        case SET_PRODUCTS_LOADER:
            return {
                ...state,
                loading: action.data
            }
        default:
            return state;
    }
};

export default productsReducer;