import './ProductCard.scss';
import { useDispatch, useSelector } from 'react-redux';
import { selectCheckoutCartData } from '../../../Store/Checkout/checkout.selectors';
import { addToCart, subtractFromCart } from '../../../Store/Checkout/checkout.action';

function ProductCard(props) {
    const {id, name, area, category, imgUrl, price} = props;

    const dispatch = useDispatch();
    const cartData = useSelector(selectCheckoutCartData);
    
    const addProductToCart = () => {
        dispatch(addToCart({
            id,
            name,
            imgUrl,
            price
        }));
    };

    const subtractProductFromCart = () => {
        dispatch(subtractFromCart({
            id,
            price
        }));
    }

    return (
        <div className={"product-card"}>
            <div className='product-card-img-wrapper'>
                <img className="product-card-img" src={imgUrl} alt='Product' />
                <div className="product-card-area-category">{area} {category}</div>
            </div>
            <div className="product-card-info">
                <p className="product-card-info-name">{name}</p>
                <p className="product-card-info-price">${price}</p>
                { !cartData[id] 
                 ? <button onClick={addProductToCart} className='add-to-cart' type="button">Add to cart</button>
                 : <div className='cart-action-buttons'>
                     <button onClick={subtractProductFromCart} className='decrease-product-cnt' type='button'>-</button>
                        <span className='product-count'>{cartData[id].count}</span>
                     <button onClick={addProductToCart} className='increase-product-cnt' type='button'>+</button>
                 </div>
                }
            </div>
        </div>
    );
}

export default ProductCard;