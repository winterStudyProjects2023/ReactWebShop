import React from 'react';
import { useContext } from 'react';
import './cart-icon.styles.scss';
import { ReactComponent as ShoppingIcon } from '../../assets/111 shopping-bag.svg'
import { CartProductsContext } from '../../contexts/cartProducts.context';


export default function CartIcon() {
    const cartProducts = useContext(CartProductsContext);
    const {isCartOpen, setIsCartOpen} = useContext(CartProductsContext)

    const items = cartProducts.length ? cartProducts.length : 0;

    const toggleCartOpen =()=> {
        setIsCartOpen(!isCartOpen);
    }

    return (
        <div className='cart-icon-container'>
            <ShoppingIcon className='shopping-icon' onClick={toggleCartOpen} />
            <span className='item-counter'>{items}</span>
        </div>
    )
}
