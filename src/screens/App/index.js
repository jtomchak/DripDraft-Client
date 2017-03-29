// @flow
import React, { PropTypes, Component } from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import 'react-virtualized/styles.css'

const { store } = require('./Store')
const { Provider } = require('react-redux')
const injectTapEventPlugin = require("react-tap-event-plugin");
injectTapEventPlugin();

import Routes from './routes';
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
