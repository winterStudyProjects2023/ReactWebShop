import React from 'react';
import './checkout.styles.scss';
import CheckoutItem from '../checkout-item/checkout-item.component'
import { useSelector } from 'react-redux';
import { selectCartReducer, selectCartTotal } from '../../store/cart/cart.selector';

export default function Checkout() {
    const { cartItems } = useSelector(selectCartReducer);
    const cartTotal = useSelector(selectCartTotal);
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
