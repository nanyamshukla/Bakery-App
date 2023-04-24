import {
    ADD_TO_CART,
    SUBTRACT_FROM_CART,
    DELETE_FROM_CART
} from './checkout.types';

import { addProductToCartState, subtractProductFromCartState, deleteProductFromCartState } from './helper';

const initState = {
    cart: {},
    total: 0
};

const checkoutReducer = (state = initState, action) => {
    switch (action.type) {
        case ADD_TO_CART: {
            const newState = addProductToCartState(state, action.data);
            return {...newState}
        }
        case SUBTRACT_FROM_CART: {
            const newState = subtractProductFromCartState(state, action.data);
            return {...newState}
        }
        case DELETE_FROM_CART: {
            const newState = deleteProductFromCartState(state, action.data);
            return {...newState}
        }
        default:
            return state;
    }
};

export default checkoutReducer;