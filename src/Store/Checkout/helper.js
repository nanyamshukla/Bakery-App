export const addProductToCartState = (state, data) => {
    const cartData = {...state.cart};
    const total = state.total;
    if(!cartData[data.id]) {
        cartData[data.id] = {...data, count: 1};
    }
    else {
        cartData[data.id].count++;
    }
    return { 
        ...state,
        cart: cartData,
        total: total+data.price
    }
};

export const subtractProductFromCartState = (state, data) => {
    const cartData = {...state.cart};
    const total = state.total;
    cartData[data.id].count--;
    if(cartData[data.id].count===0) {
        delete cartData[data.id];
    }

    return { 
        ...state,
        cart: cartData,
        total: total-data.price
    }
};

export const deleteProductFromCartState = (state, data) => {
    const cartData = {...state.cart};
    const total = state.total;
    const productCount = cartData[data.id].count;
    delete cartData[data.id];

    return { 
        ...state,
        cart: cartData,
        total: total - (data.price*productCount)
    }
};