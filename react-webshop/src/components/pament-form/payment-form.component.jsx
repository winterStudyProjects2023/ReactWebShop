import { useState } from 'react';
import './payment-form.style.scss'

import { useStripe, useElements } from '@stripe/react-stripe-js';
import { PaymentElement} from '@stripe/react-stripe-js';

import Button from '../button/button.component'

export const PaymentForm = () => {

  const stripe = useStripe();
  const elements = useElements();
 
  const [isProcessingPayment, setIsProcessingPayment] = useState(false);

  const paymentHandeler = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) {
      return
    }

    setIsProcessingPayment(true);

    const {error} = await stripe.confirmPayment({
      elements,
      confirmParams:{
        return_url: `${window.location.origin}`,
      }
    });

      if (error) {
        alert('Error! Payment not processed!');
      }

    setIsProcessingPayment(false);
}

  return (
      <div className='payment-form-wrapper'>
        <form className='stripe-element-form' onSubmit={paymentHandeler}>
          <h3>Payment methods</h3>
             <PaymentElement />
          <Button disabled={isProcessingPayment} buttonType={'inverted'}> PAY NOW</Button>
        </form>
      </div>
  )
}
