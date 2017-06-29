import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';

import App from './App';
import About from './ui/about'
import Layout from './ui/Layout'
import AllProduct from './ui/AllProduct'
import Product from './ui/Product'
import ShowProductId from './ui/ShowProductId'
import Allabout from './ui/Allabout'

const Routes = (props) => (
  <Router {...props}>
    <Route path='/' component={Layout}>
      <Route path='about' component={About}>
        <IndexRoute component={Allabout} />
      </Route>
      <Route path='product' component={Product}>
        <IndexRoute component={AllProduct} />
        <Route path=':id' component={ShowProductId} />
      </Route>
    </Route>
  </Router>
);

export default Routes;