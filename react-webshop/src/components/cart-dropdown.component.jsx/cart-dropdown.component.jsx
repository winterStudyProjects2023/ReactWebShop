import React from 'react';
import { useContext } from 'react';
import './cart-dropdown.styles.scss';
import Button from '../button/button.component';
import { CartProductsContext } from '../../contexts/cartProducts.context';

export default function CartDropdown() {
    const cartProducts = useContext(CartProductsContext);
    return (
        <div className='cart-dropdown-container'>
            <div className="cart-items">Text</div>
            <Button>GO TO CHECKOUT</Button>
        </div>
    )
}
