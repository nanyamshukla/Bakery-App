import { createSelector } from 'reselect'

export const isProductFetching = createSelector(
  (state) => state.products,
  (products) => products.loading
);

export const selectProducts = createSelector(
    (state) => state.products,
    (products) => products.products
);