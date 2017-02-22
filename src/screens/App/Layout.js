const React = require('react');
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import classnames from 'classnames';

const Layout = (props) => (
  <MuiThemeProvider>
  <div>
        <AppBar
          title="drip draft"
          iconClassNameRight="muidocs-icon-navigation-expand-more"
        />
      {props.children}
  </div>
  </MuiThemeProvider>
)

const { element } = React.PropTypes

Layout.propTypes = {
  children: element.isRequired
}

module.exports = Layout