require('dotenv').config();

const stripe = require('stripe')(process.env.REACT_APP_STRIPE_SECRET_KEY);

exports.handler = async (event) => {

  const CORS_HEADERS = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers':
      'Origin, X-Requested-With, Content-Type, Accept',
  }
  
  try {
    const { amount, user, id } = JSON.parse(event.body);

    if (!amount|| !user || !id ){
      return {
        statusCode: 204,
        headers: {...CORS_HEADERS},
        body: JSON.stringify({}),
      }
    }
    
    const contactUser = user.currentUser.email;

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
      headers: {...CORS_HEADERS},
      body: JSON.stringify({ paymentIntent }),
    };
  } catch (error) {
    return {
      statusCode: 400,
      headers: {...CORS_HEADERS},
      body: JSON.stringify({ error }),
    };
  }
};
