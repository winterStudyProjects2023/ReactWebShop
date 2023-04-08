import React from 'react';
import { Route, Routes} from 'react-router-dom';
import Navigation from './routes/navigation/navigation.component';
import Home from './routes/home/home.component';
import Authentication from './routes/authentification/authentification.component';
import Shop from './routes/shop/shop.component';
import Checkout from './components/checkout/checkout.component';
const App = () => {

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
