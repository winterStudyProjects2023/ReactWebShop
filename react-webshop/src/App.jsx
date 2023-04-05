import React from 'react';
import { Route, Routes} from 'react-router-dom';
import Navigation from './routes/navigation/navigation.component';
import Home from './routes/home/home.component';
import Authentication from './routes/authentification/authentification.component';
const App = () => {

  const Shop = ()=> {
    return (
      <div>
        <h1>Shop Page</h1>
      </div>
    )
  }
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path = '/shop' element={<Shop />} />
        <Route path = '/auth' element={<Authentication />} />
      </Route>
    </Routes>
  );
};

export default App;
