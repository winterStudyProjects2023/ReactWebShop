import React from 'react';
import { useContext } from 'react';
import {useNavigate} from 'react-router-dom'
import './cart-dropdown.styles.scss';
import CartItem from '../cart-item/cart-item.component';
import Button from '../button/button.component';
import { CartProductsContext } from '../../contexts/cartProducts.context';

export default function CartDropdown() {
    const navigate = useNavigate();
    const { cartItems, setIsCartOpen } = useContext(CartProductsContext);

    const goToCheckout = () => {
        setIsCartOpen(false);
        navigate('/checkout');
    }
    return (
        <div className='cart-dropdown-container'>
            {cartItems.map((item) => {
                return <CartItem key={item.id} cartItem={item} />
            })}
            <Button onClick={goToCheckout}>GO TO CHECKOUT</Button>
        </div>
    )
}
