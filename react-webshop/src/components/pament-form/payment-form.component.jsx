import React from 'react';
import { CardElement } from '@stripe/react-stripe-js';
import Button from '../button/button.component'


export const PaymentForm = () => {
  return (
    <div>
        <CardElement className='stripe-cardElement' />
        <Button buttonType={'inverted'}> PAY NOW</Button>
    </div>
  )
}
