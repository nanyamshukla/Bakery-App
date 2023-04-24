import { ADD_TO_CART, SUBTRACT_FROM_CART, DELETE_FROM_CART } from './checkout.types';

export const addToCart = (data) => ({
    type: ADD_TO_CART,
    data
});

export const subtractFromCart = (data) => ({
    type: SUBTRACT_FROM_CART,
    data
});

export const deleteFromCart = (data) => ({
    type: DELETE_FROM_CART,
    data
});