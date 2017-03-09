const React = require('react');
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import classnames from 'classnames';

import { AppToolbar } from '../../containers';

const Layout = (props) => (
    <MuiThemeProvider>
  <div>
    <AppToolbar />
      {props.children}
  </div>
  </MuiThemeProvider>
)

const { element } = React.PropTypes

Layout.propTypes = {
  children: element.isRequired
}

module.exports = Layout