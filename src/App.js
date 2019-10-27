import React from 'react';

import {
  BrowserRouter, 
  Route, 
  Switch 
} from 'react-router-dom'; 

import Home from 'pages/Home';
import Products from 'pages/Products';

import Layout from 'components/Layout';

const App=()=> {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route  path="/" exact component={Home} />
          <Route  path="/products" exact component={Products} />

        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
