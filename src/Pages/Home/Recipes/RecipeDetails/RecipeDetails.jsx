import { useDispatch } from 'react-redux';
import './RecipeDetails.scss';
import { setSelectedRecipe } from '../../../../Store/Recipes/recipes.action';

function getIngredients(data) {
    let ingList = [];
    for(let i=1; i<=20; i++) {
        if(data[`strIngredient${i}`]!=="") {
            ingList.push(`${data[`strIngredient${i}`]} - ${data[`strMeasure${i}`]}`);
        }
        else {
            break;
        }
    }
    return ingList;
}

function RecipeDetails({data}) {
    const dispatch = useDispatch();
    const {strMeal: name, strArea: area, strCategory: category, strMealThumb: imgUrl, strInstructions: instructions} = data;
    const ingredientsList = getIngredients(data);

    const closeSelectedRecipe = () => {
        dispatch(setSelectedRecipe({id: null, data: []}));
    }

    return (
        <div className='recipe-details'>
            <span className='close-recipe-details' onClick={closeSelectedRecipe}>X</span>
            <div className='meal-preview'>
                <img src={imgUrl} alt='meal' className='meal-image' />
                <div className='meal-info'>
                    <p className='meal-name'>{name}</p>
                    <div className='meal-area-category'>
                        <span className='meal-area'>Area - {area}</span>
                        <span className='meal-category'>Category - {category}</span>
                    </div>
                </div>
            </div>
            <p className='meal-instructions'>{instructions}</p>
            <div className='meal-ingredients'>
                {ingredientsList.map(ingredient => <span key={ingredient} className='ingredient'>{ingredient}</span>)}
            </div>
        </div>
    )
}

export default RecipeDetails;