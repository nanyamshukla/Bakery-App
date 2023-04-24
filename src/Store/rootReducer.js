import { combineReducers } from 'redux';
import productsReducer from './Products/products.reducer';
import checkoutReducer from './Checkout/checkout.reducer';
import recipesReducer from './Recipes/recipes.reducer';

export const rootReducer = combineReducers({
    products: productsReducer,
    checkout: checkoutReducer,
    recipes: recipesReducer
});