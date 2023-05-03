import React from 'react';
import { CardElement } from '@stripe/react-stripe-js';
import Button from '../button/button.component'


export const PaymentForm = () => {
  return (
    <div>
        <h2>---------</h2>
        <CardElement className='stripe-cardElement' />
        <h2>---------</h2>
        <Button buttonType={'inverted'}> PAY NOW</Button>
    </div>
  )
}
