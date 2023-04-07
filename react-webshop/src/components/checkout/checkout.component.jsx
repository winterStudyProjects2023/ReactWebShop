import React from 'react';
import { useContext } from 'react';
import { CartProductsContext } from '../../contexts/cartProducts.context';
import './checkout.styles.scss';
import CheckoutItem from '../checkout-item/checkout-item.component'
export default function Checkout() {
    const { cartItems } = useContext(CartProductsContext);

    return (
        <div className='checkout-container'>
            <div className="checkout-header">
                <span>Products</span>
                <span>Description</span>
                <span>Quantity</span>
                <span>Price</span>
                <span>Remove</span>
            </div>
            {cartItems.map((cartItem) =>
                <CheckoutItem key = {cartItem.id} cartItem={cartItem}
                />
            )}
        </div>
    )
}
