import './CategoryCard.scss';
import classNames from 'classnames';

function CategoryCard(props) {
    const {type, logo, logoAltText, heading='heading', description='description', handleClick, selected} = props;

    return (
        <div className={classNames("category-card", {"category-card-selected": selected===true})} onClick={() => handleClick(type)}>
            <img className="category-card-logo" src={logo} alt={logoAltText} />
            <div className="category-card-info">
                <span className="category-card-info-heading">{heading}</span>
                <p className="category-card-info-description">{description}</p>
            </div>
        </div>
    );
}

export default CategoryCard;