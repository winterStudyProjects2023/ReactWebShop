# ReactWebShop

## About 

This is a demo React front-end web shop project, built using React functional components and React hooks.

There are 5 different categories of products in the web shop- Hats, Jackets, Sneakers, Men's and Women's

There is a navigation menu with SHOP, SIGN IN / SIGN OUT and CART icon with the number of the products inside.

Slide in / slide out - Cart component available when clicking on the icon.

CHECKOUT component / page available on clicking the CHECKOUT button in the cart

In this project I integrate some of the modern React technologies, as some external back-end services:

FIREBASE - for storing users & user authentication

FIREBASE FIRESTORE - as a cloud DB to store product's and categories object.

NETLIFY - Serverless app deployment

STRIPE -  Development STRIPE API (upcoming) for handling mock payments 



## Structure and components

### Structure

In the /src folder are presented following sub folders:

  - components - for storing reusable components. In each component folder, the component itself is stored with extension .component.jsx. The style for the component is stored in a file with extension .styles.scss.

  - assets - logos & icons 

  - context - There are 3 components in the folder. UserContext for storing the current user data and status, storing current added Cart Products and categories to store state of the fetched object from the Firebase DB - the categories with the products inside.

  - routes - Here are situated the components for the different routes/pages in the App 
      - home - initial state of the App consisting of Navigation + Home
      - navigation - bar that is always presented on the top containing links to other routes - shop, sign in/out, cart slider
      - authentication - route that contains two - signIn and signUp component forms, responsible for authenticating users.
      - categories preview - preview page for all categories with presentation of only 4 products from a category
      - category - route to a whole categoty preview
      - shop - a sub router in the app managing the sub-routes in '/shop' - default: categories-preview or sub-routes: /shop/category

  - utils - a folder with a js file containing Firebase helper functions responsible for: initializing connections with Firebase authentication and Firebase Firestore, providing credentials, SignIn users with e-mail or google profile, sign Up users with email and password, creating or reading user records in Firebase, reading from or adding records in the DB, authentication state listener. As Google changes regularly the methods of Firebase communication, it's much easier to update the functions, used around the app from only one centralized place.

### Technologies and methods use for building the project

- HTML
- SCSS
- React with react functional components
- React hooks 
- React router
- React context API
- Firebase Authentication
- Firebase Firestore 
- Netlify deployed with continuious integration (CI) from Github
 
- Stripe mock API integration (in progress ... for v2.0)
- Typescript strict types (in Progress ... for v2.0)
- React refactoring with useReducer (in progress for v2.0) 
- Redux refactoring (in progress ... for v2.0)
- Jest and Cypress - tests implementation (in progress ... v2.0)

### Sources with links that significantly helped for building this project
### Great thanks for providing such useful information

  - Best react practices - React & Typescript
    https://react.dev/learn
    
  - Detecting mobile or desktop with CSS / SCSS without relaying only on page size (@media)
    https://habr.com/en/sandbox/163605/
    
  - Complete React Developer in 2023 Udemy high-end online course
    https://www.udemy.com/course/complete-react-developer-zero-to-mastery/?src=sac&kw=complete+react+developer
    
  - SALT Amsterdam - winter'23 bootcamp high quality training 
    https://www.salt.dev/
     
  - Managing the security of Firebase credentials, when using front-end app & firebase & netlify.com - '.env.local'   
    https://hashnode.com/post/how-to-use-firebase-config-on-netlify-safely-for-a-react-app-ckql6d43h004jkks13vn23g2b
