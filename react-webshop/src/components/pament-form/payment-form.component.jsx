import { useState } from 'react';
import './payment-form.style.scss'
import { useStripe, useElements } from '@stripe/react-stripe-js';
import { CardElement } from '@stripe/react-stripe-js';
import Button from '../button/button.component'
import { useSelector } from 'react-redux';
import { selectCartTotal } from '../../store/cart/cart.selector';
import { selectCurrentUser } from '../../store/user/user.selector';

export const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const amount = useSelector(selectCartTotal);
  const {currentUser} = useSelector(selectCurrentUser);
  const userEmail =  currentUser? currentUser.email : 'Guest';
 
  const [isProcessingPayment, setIsProcessingPayment] = useState(false);


  const paymentHandeler = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return
    }

    setIsProcessingPayment(true);

    const response = await fetch(
      '/.netlify/functions/create-payment-intent', {
      method: 'post',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({ amount: amount * 100 })
    }).then(res => res.json());

    //  const clientSecret = response.paymentIntent.client_secret;
    // standart or destructuring from object below

    const { paymentIntent: { client_secret } } = response;

    const paymentResult = await stripe.confirmCardPayment(
      client_secret, {
      payment_method: {
        card: elements.getElement(CardElement),
        billing_details: {
          name: userEmail
        }
      }
    });

    setIsProcessingPayment(false);

    if (paymentResult.error) {
      alert('Error! Unsucessful payment! Check your card details or yor internet connection!')
    } else
      if (paymentResult.paymentIntent.status === 'succeeded') {
        alert('Payment Successful');
      }

  }


  return (
    <div className='payment-form-wrapper'>
      <form onSubmit={paymentHandeler}>
        <h2>Credit Card Payment</h2>
        <CardElement />
        <Button disabled={isProcessingPayment} buttonType={'inverted'}> PAY NOW</Button>
      </form>
    </div>
  )
}
