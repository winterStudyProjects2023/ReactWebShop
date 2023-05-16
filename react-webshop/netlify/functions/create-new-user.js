
require('dotenv').config();
const stripe = require('stripe')(process.env.REACT_APP_STRIPE_SECRET_KEY);

exports.handler =  async (event) => {
  try {
    const {user} = JSON.parse(event.body);
    const userEmail = user.currentUser.email

    if (!userEmail) {
      return {
        statusCode: 200,
        body: JSON.stringify({}),
      };

    }
    const currentUser = await stripe.customers.search({
      query: `email:'${userEmail}'`,
    });
    let userData= currentUser.data;

    if (!userData.length) {
      const customer = await stripe.customers.create({
       name: 'New User',
       email: userEmail,
      });
      userData = customer;
    }
  
    return {
      statusCode: 200,
      body: JSON.stringify({userData }),
    };
  } catch (error) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error }),
    };
  }
};
