import React from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux'
import { Route, Routes} from 'react-router-dom';
import Navigation from './routes/navigation/navigation.component';
import Home from './routes/home/home.component';
import Authentication from './routes/authentification/authentification.component';
import Shop from './routes/shop/shop.component';
import Checkout from './components/checkout/checkout.component';
import { createUserDocumentFromAuth, onAuthStateChangedListener } from "./utils/firebase/firebase.utils";
import { setCurrentUser } from './store/user/user.reducer';

const App = () => {

const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
        if (user) {
             createUserDocumentFromAuth(user);
        }
        console.log('user:',user)
        const pickedUser =  user && (({accessToken, email}) => ({ accessToken, email}))(user);
        // ---- code below, same result as the line above - function currying ----
        // let pickedUser = null;
        // if (user) {
        //   const { accessToken, email } = user;
        //   pickedUser = { accessToken, email };
        // }


        console.log('pickedUser:', pickedUser);
        dispatch(setCurrentUser(pickedUser));
    });
    
    return unsubscribe;
}, [dispatch]);


  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path = '/checkout' element={<Checkout />} />
        <Route path = '/shop/*' element={<Shop />} />
        <Route path = '/auth' element={<Authentication />} />
      </Route>
    </Routes>
  );
};

export default App;
