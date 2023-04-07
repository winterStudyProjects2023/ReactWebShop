import React from 'react';
import { useContext } from 'react';
import { CartProductsContext } from '../../contexts/cartProducts.context';
import './checkout.styles.scss';
import CheckoutItem from '../checkout-item/checkout-item.component'
export default function Checkout() {
    const { cartItems, cartTotal } = useContext(CartProductsContext);
    const total = cartItems.reduce((acc, item) => (acc + item.price * item.quantity), 0);
    return (
        <div className='checkout-container'>
            <div className="checkout-header">
                <div className="header-bloc">
                    <span>Products</span>
                </div>
                <div className="header-bloc">
                    <span>Description</span>
                </div>
                <div className="header-bloc">
                    <span>Quantity</span>
                </div>
                <div className="header-bloc">
                    <span>Price</span>
                </div>
                <div className="header-bloc">
                    <span>Remove</span>
                </div>
            </div>
            {cartItems.map((cartItem) =>
                <CheckoutItem key={cartItem.id} cartItem={cartItem}
                />
            )}
            <div className="total">Total: €{`${cartTotal}`}</div>
        </div>
    )
}
