import React from 'react';
import { useContext } from 'react';
import './cart-dropdown.styles.scss';
import CartItem from '../cart-item/cart-item.component';
import Button from '../button/button.component';
import { CartProductsContext } from '../../contexts/cartProducts.context';

export default function CartDropdown() {

    const {cartItems} = useContext(CartProductsContext);

    return (
        <div className='cart-dropdown-container'>
            {cartItems.map((item) => {
                return <CartItem key={item.id} cartItem = {item} />
            })}
            <Button>GO TO CHECKOUT</Button>
        </div>
    )
}
