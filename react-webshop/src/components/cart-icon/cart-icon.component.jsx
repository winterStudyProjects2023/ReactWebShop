import React from 'react';
import './cart-icon.styles.scss';
import { useDispatch, useSelector } from 'react-redux';
import { ReactComponent as ShoppingIcon } from '../../assets/111 shopping-bag.svg'
import { setIsCartOpen } from '../../store/cart/cart.reducer';
import { selectCartCount } from '../../store/cart/cart.selector';

export default function CartIcon() {
    const dispatch = useDispatch();
    const cartCount = useSelector(selectCartCount);
    const {isCartOpen} = useSelector((state)=>state.cart);
    
    const toggleCartOpen =()=> {
        dispatch(setIsCartOpen(!isCartOpen));
    }
    
    return (
        <div className='cart-icon-container' onClick={toggleCartOpen} >
            <ShoppingIcon className='shopping-icon' />
            <span className='item-counter'>{cartCount}</span>
        </div>
    )
}
