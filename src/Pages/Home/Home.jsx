import {useState} from 'react';
import './Home.scss';
import categoryConfig from '../../Config/categoryConfig';
import Header from '../../Components/Header/Header';
import CategoryCard from '../../Components/Cards/Category/CategoryCard';
import Products from './Products/Products';
import Recipes from './Recipes/Recipes';
import { CATEGORIES } from '../../constants';

function Home() {
    const [category, setCategory] = useState(categoryConfig[0].type);

    return (
        <>
            <Header />
            <div className="categories">
                {categoryConfig.map(({type, logo, logoAltText, heading, description}) => (
                    <CategoryCard 
                        type={type}
                        logo={logo} 
                        logoAltText={logoAltText} 
                        heading={heading} 
                        description={description} 
                        handleClick={setCategory}
                        selected={category===type}
                        key={type}
                    />
                ))}
            </div>
            {category===CATEGORIES.PRODUCTS ? <Products /> : <Recipes />}
        </>
    );
}

export default Home;
  