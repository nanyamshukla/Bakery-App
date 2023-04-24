import { createSelector } from 'reselect'

export const selectCheckoutCartData = createSelector(
    (state) => state.checkout,
    (checkout) => checkout.cart
);

export const selectCheckoutCartTotal = createSelector(
    (state) => state.checkout,
    (checkout) => checkout.total
);

export const selectCheckoutCartCount = createSelector(
    (state) => state.checkout.cart,
    (cart) => {
        const cartKeys = Object.keys(cart);
        return cartKeys.reduce((acc, key) => acc + cart[key].count, 0);
    }
);