import React from 'react'
import { useDispatch } from 'react-redux';
import { removeItemFromCart, addItemToCart, clearCartItem} from '../../store/cart/cart.reducer'
import './checkout-item.styles.scss';

export default function CheckoutItem({ cartItem }) {
    const dispatch = useDispatch();
    const { name, imageUrl, price, quantity } = cartItem;

    const decreseQuantity = () => dispatch(removeItemFromCart(cartItem));
    const increseQuantity = () => dispatch(addItemToCart(cartItem));
    const remove =() => dispatch(clearCartItem(cartItem));

    return (
        <div className='checkout-item-container'>

            <div className="image-container">
                <img src={imageUrl} alt={`${name}`} />
            </div>

            <div className='name' >{name}</div>

            <div className='quantity'>
                <div className='arrow' onClick={decreseQuantity}>{'<'}</div>
                <div>{quantity}</div>
                <div className='arrow' onClick={increseQuantity}>{'>'}</div>
            </div>

            <div className='value'>€{price * quantity}</div>

            <div className='remove-button' onClick={remove}>&#10005;</div>
        </div>
    )
}
