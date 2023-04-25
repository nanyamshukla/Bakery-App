
import './Checkout.scss';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Header from '../../Components/Header/Header';
import { selectCheckoutCartData, selectCheckoutCartTotal } from '../../Store/Checkout/checkout.selectors';
import CheckoutCard from '../../Components/Cards/Checkout/CheckoutCard';


function Checkout() {
    const cartData = useSelector(selectCheckoutCartData);
    const cartTotal = useSelector(selectCheckoutCartTotal);

    const printReceipt = () => {
        let receipt = '\n---- This is your shopping receipt details: ----\n';
        const receiptData = Object.keys(cartData).map((productId, index) => {
            const {name, price, count} = cartData[productId];
            return `${index+1}. ${name}: ${count} X $${price} = $${count*price}`;
        });

        receiptData.forEach(data => {receipt = receipt + data + '\n'});
        receipt += `---- Total: $${cartTotal} ----`;
        console.log(receipt);
    }

    return (
        <>
            <Header />
            <div className='checkout'>
                <span className='checkout-heading' >Checkout</span>
                <div className='checkout-products-container'>
                    {Object.keys(cartData).length===0  
                        ? <p className='empty-cart-msg'>Oops! The cart is empty. Please add some items in cart from the <Link to='/Bakery-App/'>Home</Link> page.</p>
                        : <div className='cart-total-checkout'>
                            <span className='cart-total'>Total: ${cartTotal}</span>
                            <button type='button' className='checkout-button' onClick={printReceipt}>Checkout</button>
                        </div>
                    }
                    {Object.keys(cartData).map(productId => {
                        return(<CheckoutCard data={cartData[productId]} key={cartData[productId].id} />)
                    })}
                </div>
            </div>
        </>
    );
}

export default Checkout;
  