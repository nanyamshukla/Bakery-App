import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './Products.scss';
import { isProductFetching, selectProducts } from '../../../Store/Products/products.selectors';
import { fetchProducts } from '../../../Store/Products/products.action';
import ProductCard from '../../../Components/Cards/Product/ProductCard';
import Loader from '../../../Components/Loader/Loader';


function Products() {
    const dispatch = useDispatch();
    const isFetchingProducts = useSelector(isProductFetching);
    const products = useSelector(selectProducts);

    // Fetching products if on mount and adding event listener for infinite scrolling
    useEffect(() => {
        if(!products.length) {
            dispatch(fetchProducts());
        }
    }, [dispatch, products.length]);

    return (
        <>
            <div className="products-container">
                {products.map(productDetails => {
                    const {idMeal: id, strMeal: name, strArea: area, strCategory: category, strMealThumb: imgUrl, price} = productDetails;
                    return(
                    <ProductCard
                        id={id}
                        name={name}
                        area={area}
                        category={category}
                        imgUrl={imgUrl}
                        price={price}
                        key={id}
                    />)
                })}
            </div>
            {isFetchingProducts && <Loader />}
        </>
    );
}

export default Products;