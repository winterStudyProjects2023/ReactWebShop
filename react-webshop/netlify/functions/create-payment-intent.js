require('dotenv').config();

const stripe = require('stripe')(process.env.REACT_APP_STRIPE_SECRET_KEY);

exports.handler = async (event) => {
  try {
    const { amount, user, id } = JSON.parse(event.body);

    console.log('------end------:', id);
    const contactUser = user.currentUser ? user.currentUser.email : 'Guest';
    if (!id) {return}

      const paymentIntent = await stripe.paymentIntents.create({
        amount: amount * 100,
        customer:id,
        currency: 'eur',
        description: `${contactUser}`,
        automatic_payment_methods: {
          enabled: true,
        },
      });
    

    return {
      statusCode: 200,
      body: JSON.stringify({ paymentIntent }),
    };
  } catch (error) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error }),
    };
  }
};
