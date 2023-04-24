import { useDispatch } from 'react-redux';
import './CheckoutCard.scss';
import { addToCart, subtractFromCart, deleteFromCart } from '../../../Store/Checkout/checkout.action';

function CheckoutCard({data}) {
    const {id, name, imgUrl, price, count} = data;
    const dispatch = useDispatch();

    const increaseProductCount = () => {
        dispatch(addToCart({
            id,
            name,
            imgUrl,
            price
        }));
    };

    const decreaseProductCount = () => {
        dispatch(subtractFromCart({
            id,
            price
        }));
    };

    const deleteProductFromCart = () => {
        dispatch(deleteFromCart({
            id,
            price
        }));
    };

    return (
        <div className='checkout-card'>
            <img src={imgUrl} alt={name} />
            <div className='product-description'>
                <span className='product-name'>{name}</span>
                <span className='product-price-count'>{count} X {price} : ${price*count}</span>
            </div>
            <div className="product-action-buttons">
                <button className='decrease-count' onClick={decreaseProductCount}>-</button>
                <button className='increase-count' onClick={increaseProductCount}>+</button>
                <button className='delete-product' onClick={deleteProductFromCart}>Delete</button>
            </div>
        </div>
    )
}

export default CheckoutCard;