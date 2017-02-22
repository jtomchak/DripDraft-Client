// @flow
import React, { PropTypes, Component } from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
const { store } = require('./Store')
const { Provider } = require('react-redux')

import Routes from './routes';

import Layout from './Layout';
import About from '../About'
import NotFound from '../NotFound';
import './style.css';


const App = React.createClass({
  render () {
    return (
        <Router history={browserHistory}>
          {Routes()}
        </Router>
    )
  }
})

App.routes = Routes
export default App;
