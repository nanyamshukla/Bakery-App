import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './Recipes.scss';
import { debounce } from '../../../Helpers/debounce';
import { isRecipesFetching, selectRecipeItems, selectRecipeData } from '../../../Store/Recipes/recipes.selectors';
import { fetchRecipes, setSelectedRecipe } from '../../../Store/Recipes/recipes.action';
import RecipeCard from '../../../Components/Cards/Recipe/RecipeCard';
import RecipeDetails from './RecipeDetails/RecipeDetails';
import Loader from '../../../Components/Loader/Loader';

function Recipes() {
    const dispatch = useDispatch();
    const selectedRecipeData = useSelector(selectRecipeData);
    const isFetchingRecipes = useSelector(isRecipesFetching);
    const recipeItems = useSelector(selectRecipeItems);

    useEffect(() => {
        dispatch(fetchRecipes(''));
    }, [dispatch]);

    const searchRecipe = (e) => {
        dispatch(fetchRecipes(e.target.value));
    };

    const handleRecipeClick = (id,data) => {
        dispatch(setSelectedRecipe({id,data}))
    }

    return (
        <div className='recipes-container'>
            <input className='recipe-search' type='text' placeholder='Search for a recipe' onChange={debounce(searchRecipe, 500)} />
            {isFetchingRecipes ? <Loader />
                : <>
                    {selectedRecipeData.id!==null 
                        ? <RecipeDetails data={selectedRecipeData.data} />
                        : <>
                            {recipeItems.length===0 && <p className='no-results-found'>Oops! No results found. Please search for any other recipe.</p>}
                            <div className='recipe-items-container'>
                                {recipeItems.map((item) => <RecipeCard key={item.idMeal} data={item} onClick={handleRecipeClick} />)}
                            </div>
                        </>
                    }
                </>
            }
        </div>
    );
}

export default Recipes;