import React from 'react';
import { useState, useEffect } from 'react';
import './checkout.styles.scss';
import CheckoutItem from '../checkout-item/checkout-item.component'
import { useSelector } from 'react-redux';
import { selectCartReducer, selectCartTotal } from '../../store/cart/cart.selector';
import { selectCurrentUser } from '../../store/user/user.selector';

import { PaymentForm } from '../pament-form/payment-form.component';
import { stripePromise } from '../../utils/stripe/stripe.utils'
import { Elements } from '@stripe/react-stripe-js';

export default function Checkout() {

  const [clientSecret, setClientSecret] = useState('');
  const [userId, setUserId] = useState('');

  const { cartItems } = useSelector(selectCartReducer);
  const cartTotal = useSelector(selectCartTotal);
  const currentUser = useSelector(selectCurrentUser);
  
  const appearance = {

    theme: 'flat',
    variables: {
      fontFamily: ' "Gill Sans", sans-serif',
      fontLineHeight: '1.5',
      borderRadius: '1px',
      colorBackground: '#F6F8FA',
      colorPrimaryText: '#262626'
    },
    rules: {
      '.Block': {
        backgroundColor: 'var(--colorBackground)',
        boxShadow: 'none',
        padding: '12px'
      },
      '.Input': {
        padding: '12px'
      },
      '.Input:disabled, .Input--invalid:disabled': {
        color: 'lightgray'
      },
      '.Tab': {
        padding: '10px 12px 8px 12px',
        border: 'none'
      },
      '.Tab:hover': {
        border: 'none',
        boxShadow: '0px 1px 1px rgba(0, 0, 0, 0.03), 0px 3px 7px rgba(18, 42, 66, 0.04)'
      },
      '.Tab--selected, .Tab--selected:focus, .Tab--selected:hover': {
        border: 'none',
        backgroundColor: '#fff',
        boxShadow: '0 0 0 1.5px var(--colorPrimaryText), 0px 1px 1px rgba(0, 0, 0, 0.03), 0px 3px 7px rgba(18, 42, 66, 0.04)'
      },
      '.Label': {
        fontWeight: '500'
      }
    }
  };


  useEffect(() => {
    const fetchData = async () => {
      try {
        const userResponse = await fetch('/.netlify/functions/create-new-user', {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ user: currentUser })
        });
        const { userData } = await userResponse.json();
        setUserId(userData[0].id);
      } catch (error) {
        console.error("Failed to fetch user data:", error);
      }
    };
  
    const createPaymentIntent = async () => {
      try {
        const paymentResponse = await fetch('/.netlify/functions/create-payment-intent', {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            cartItems,
            amount: cartTotal,
            user: currentUser,
            id: userId,
          }),
        });
        const { paymentIntent: { client_secret } } = await paymentResponse.json();
        setClientSecret(client_secret);
      } catch (error) {
        console.error("Failed to create payment intent:", error);
      }
    };
  
    fetchData()
      .then(createPaymentIntent)
      .catch((error) => {
        console.error("Failed to fetch user data and create payment intent:", error);
      });
  }, [userId, currentUser, cartItems, cartTotal]);
  

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
      {clientSecret && <Elements stripe={stripePromise} options={{ clientSecret, ...appearance }}>
        <PaymentForm />
      </Elements>
      }

    </div>
  )
}
