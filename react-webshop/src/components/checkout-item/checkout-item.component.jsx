import React from 'react';
import { useContext } from 'react';
import './checkout-item.styles.scss';
import { CartProductsContext } from '../../contexts/cartProducts.context';

export default function CheckoutItem({ cartItem }) {

    const { addItemToCart, removeItemFromCart, cartItems, setCartItems } = useContext(CartProductsContext);
    const { name, imageUrl, price, quantity } = cartItem;

    const decreseQuantity = () => removeItemFromCart(cartItem);
    const increseQuantity = () => addItemToCart(cartItem);

    const removeItem = () => {
        const updatedCartItems = cartItems.filter((item) => item.id !== cartItem.id)
        setCartItems(updatedCartItems);
    }

    return (
        <div className='checkout-item-container'>

            <div className='image-container'>
                <img src={imageUrl} alt={`${name}`} />
            </div>

            <div className='name' >{name}</div>

            <div className='quantity'>
                <div className='arrow' onClick={decreseQuantity}>{'<'}</div>
                <div>{quantity}</div>
                <div className='arrow' onClick={increseQuantity}>{'>'}</div>
            </div>

            <div className='value'>€{price * quantity}</div>

            <div className='remove-button' onClick={removeItem}>&#10005;</div>
        </div>
    )
}
