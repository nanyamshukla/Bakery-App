import { createSelector } from 'reselect'

export const isRecipesFetching = createSelector(
  (state) => state.recipes,
  (recipes) => recipes.loading
);

export const selectRecipeData = createSelector(
    (state) => {
      return state.recipes},
    (recipes) => recipes.selectedRecipe
);

export const selectRecipeItems = createSelector(
    (state) => state.recipes,
    (recipes) => recipes.items
);