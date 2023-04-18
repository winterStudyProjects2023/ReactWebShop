import React from 'react';
import Button from '../button/button.component';
import { useDispatch } from 'react-redux';
import { addItemToCart } from '../../store/cart/cart.reducer';

import './product-card.styles.scss';


export default function ProductCard({ product }) {
  const dispatch = useDispatch();
  const { name, price, imageUrl } = product;


  const addProductToCart = () => dispatch(addItemToCart(product));

  return (
    <div className='card-container'>
      <img src={imageUrl} alt={`${name}`} />
      <div className='footer'>
        <span className='name'>{name}</span>
        <span className='price'>{`€${price}`}</span>
      </div>
      <Button buttonType='inverted' onClick={addProductToCart} >ADD TO CART</Button>
    </div>
  )
}
