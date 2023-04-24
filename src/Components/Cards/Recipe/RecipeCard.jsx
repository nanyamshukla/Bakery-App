import './RecipeCard.scss';

function RecipeCard(props) {
    const {data, onClick} = props;
    const {idMeal: id, strMeal: name, strArea: area, strCategory: category, strMealThumb: imgUrl} = data;

    return (
        <div className={"recipe-card"} onClick={() => onClick(id, data)}>
            <div className='recipe-card-img-wrapper'>
                <img className="recipe-card-img" src={imgUrl} alt='Product' />
                <div className="recipe-card-area-category">{area} {category}</div>
            </div>
            <div className="recipe-card-info">
                <p className="recipe-card-info-name">{name}</p>
            </div>
        </div>
    );
}

export default RecipeCard;