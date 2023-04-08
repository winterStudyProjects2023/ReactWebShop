import React from 'react';
import Button from '../button/button.component';
import { useContext } from 'react';
import { CartProductsContext } from '../../contexts/cartProducts.context';

import './product-card.styles.scss';


export default function ProductCard({ product }) {
  const { name, price, imageUrl } = product;

  const { addItemToCart } = useContext(CartProductsContext);

  const addProductToCart = () => addItemToCart(product);

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
