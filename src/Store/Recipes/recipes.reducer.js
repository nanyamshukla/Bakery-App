import {
    FETCH_RECIPES,
    SET_RECIPES_FETCH_LOADER,
    SET_SELECTED_RECIPE
} from './recipes.types';

const initState = {
    loading: false,
    items: [], 
    selectedRecipe: {
        id: null,
        data: {}
    }
};

const recipesReducer = (state = initState, action) => {
    switch (action.type) {
        case FETCH_RECIPES:
            return {
                ...state,
                items: action.data || []
            };
        case SET_RECIPES_FETCH_LOADER:
            return {
                ...state,
                loading: action.data,
                selectedRecipe: {
                    id: null,
                    data: []
                }
            }
        case SET_SELECTED_RECIPE:
            return {
                ...state,
                selectedRecipe: {
                    id: action.data.id,
                    data: action.data.data
                }
            }
        default:
            return state;
    }
};

export default recipesReducer;