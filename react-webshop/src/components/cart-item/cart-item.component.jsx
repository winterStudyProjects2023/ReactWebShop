import React from 'react';
import './cart-item.styles.scss';


export default function CartItem({ cartItem }) {
    const {name, quantity } = cartItem;
  return (
    <div>
        <div>{name}</div>
        <span>{quantity}</span>
    </div>
  )
}
