import {
    FETCH_RECIPES,
    SET_RECIPES_FETCH_LOADER,
    SET_SELECTED_RECIPE
} from './recipes.types';

const setRecipesLoader = (value) => ({
    type: SET_RECIPES_FETCH_LOADER,
    data: value
})

const setRecipes = data => ({
    type: FETCH_RECIPES,
    data
});

export const setSelectedRecipe = data => ({
    type: SET_SELECTED_RECIPE,
    data
});


export const fetchRecipes = (searchTerm) => {
    return async dispatch => {
        dispatch(setRecipesLoader(true));
        await new Promise((res) => setTimeout(res, 1000));
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`)
        .then(res => res.json())
        .then(res => {
            const recipes = res.meals;
            dispatch(setRecipes(recipes));
            dispatch(setRecipesLoader(false));
        })
    };
};