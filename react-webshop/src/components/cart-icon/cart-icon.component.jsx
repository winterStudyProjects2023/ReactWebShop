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
        <div className='cart-icon-container'>
            <ShoppingIcon className='shopping-icon' onClick={toggleCartOpen} />
            <span className='item-counter'>{cartCount}</span>
        </div>
    )
}
