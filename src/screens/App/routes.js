import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import Layout from './Layout';

import About from '../About';
import Topic from '../Topic';
import NotFound from '../NotFound';


const Routes = (props) => (
  <Route {...props} path='/' component={Layout}>
    <IndexRoute component={Topic} />
    <Route path="/about" component={About} />
    <Route path="*" component={NotFound} />
  </Route>
)

export default Routes;