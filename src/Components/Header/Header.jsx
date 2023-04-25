import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import BakeryLogo from '../../Assets/bakery.png';
import CartLogo from '../../Assets/cart.png';
import { selectCheckoutCartCount } from '../../Store/Checkout/checkout.selectors';

import './Header.scss';

function Header() {
    const cartCount = useSelector(selectCheckoutCartCount);

    return (
        <header className="header">
            <div className="head-strip">
                <Link className='app-logo-link' to='/Bakery-App/'>
                    <img className="app-logo" src={BakeryLogo} alt="BakeryLogo" />
                </Link>
                <Link className='cart-logo-link' to='/Bakery-App/checkout'>
                    <div className='cart'>
                        <img className="cart-logo" src={CartLogo} alt="CartLogo" />
                        {cartCount>0 && <span className='cart-count'>{cartCount}</span>}
                    </div>
                </Link>
            </div>
            <div className="header-bg-drop"></div>
        </header>

    );
}

export default Header;
  