import React from 'react';
import { useContext } from 'react';
import './cart-icon.styles.scss';
import { ReactComponent as ShoppingIcon } from '../../assets/111 shopping-bag.svg'
import { CartProductsContext } from '../../contexts/cartProducts.context';


export default function CartIcon() {
    const {isCartOpen, setIsCartOpen, cartCount} = useContext(CartProductsContext)
    
    const toggleCartOpen =()=> {
        setIsCartOpen(!isCartOpen);
    }
    
    
    return (
        <div className='cart-icon-container' onClick={toggleCartOpen} >
            <ShoppingIcon className='shopping-icon' />
            <span className='item-counter'>{cartCount}</span>
        </div>
    )
}
