import React from 'react';
import { useDispatch } from 'react-redux';
import {useNavigate} from 'react-router-dom'
import './cart-dropdown.styles.scss';
import CartItem from '../cart-item/cart-item.component';
import Button from '../button/button.component';
import { useSelector } from 'react-redux';
import { setIsCartOpen } from '../../store/cart/cart.reducer';

export default function CartDropdown() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {isCartOpen, cartItems} = useSelector((state)=>state.cart);

    const goToCheckout = () => {
        dispatch(setIsCartOpen(false));
        navigate('/checkout');
    }

    const closeCartDropdown =()=> {
        dispatch(setIsCartOpen(false));
    }
    return (
        <div className={isCartOpen ? 'cart-dropdown-container': 'cart-dropdown-container cart-dropdown-container-closed'} >
             <div onClick={closeCartDropdown} className='close-cart-dropdown'>&#10005;</div>
            {cartItems.map((item) => {
                return <CartItem key={item.id} cartItem={item} />
            })}
            <Button onClick={goToCheckout}>GO TO CHECKOUT</Button>
        </div>
    )
}
