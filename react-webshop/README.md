# ReactWebShop

## About 

This is a demo React front-end web shop project, built using React functional components and React hoeks.

There are 5 different categories of products in the web shop- Hats, Jackets, Sneakers, Mens and Womens

There is a navgation menu with SHOP, SIGN IN / SIGN OUT and CART icon with the number of the products inside.

Slide in / slide out - Cart component available when clicking on the icon.

CHECKOUT component / page available on clicking the CHECKOUT button in the cart

In this project I integrate some of the modern React technologies, as some externel back-end survices:

## Firebase - `for storing useres & user authentication`

### Firebase Firestore `as a cloud DB to store product's and categories object.`

### Netlify - `Serverless app deployment`

### Stripe development api (upcoming) - `for mocking payments` 

## Structure and components

### Structure

In the /src folder are presented following sub folders:

  - components - for storing reusable components. In each component folder, the component itself is stored with exgtenstion .component.jsx. The style for the component is stored in a file with extension .styles.scss.

  - assets - logos & icons 

  - context - There are 3 components in the folder. UserContext for storing the the curren user data and status, storing current added Cart Products and categories to store state of the fetched object from the Firebase DB - the categories with the products inside.

  - routes - Here are situated the components for the different routes/pages in the App 
      - home - inital state of the App consisting of Navigation + Home
      - navigation - bar that is always presented on the top containing links to othe routes - shop, sign in/out, cart slider
      - authentication - route that contains the tho - signIn and signUp component form, responsible for authenticating users.
      - categories preview - preview page for all categories with presentation of only 4 products from a category
      - category - route to a whole categoty preview
      - shop - a sub router in the app managing the subroutes in '/shop' - default: categories-preview or subroutes: /shop/category

  - utils - a folder with a js file containing Firebase helper functions resonsible for: initalizing connections with Firebase authentication and Firebase Firestore, providing credentials, SignIn users with e-mail or google profile, sign Up users with email and password, creating or reading user records in Firebase, reading from or adding records in the DB, authentication state listener. As Google changes regularly the methods of Firebase comunication, it's much easyer to update the functions, used around the app from only one centralized place.

### Technologies and methods 

- HTML
- SCSS
- JavaScript / NodeJS
- React with react functional components
- React hooks 
- React router
- React context API
- Firebase Authentication
- Firebase Firestore 
- Netlify deployed with continious integration (CI) from Github
 
- Stripe mock API integration (in progress ... for v2.0)
- Typescript strict types (in Progress ... for v2.0)
- React refactoring with useReducer (in progress for v2.0) 
- Redux refactoring in progrees  (in progress ... for v2.0)


### Firebase - `for storing useres & user authentication`

### Firebase Firestore `as a cloud DB to store product's and categories object.`

### Netlify - `Serverless app deployment`

### Stripe development api (upcoming) - `for mocking payments` 

## Structure and components

### Structure

In the /src folder I created following sub folders:

  - components - for storing my reusable components. In each component folder, the component itself is stored with exgtenstion .component.jsx. The style for the component is stored in a file with extension .styles.scss








# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
