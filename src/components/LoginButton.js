import React, {Component} from 'react';
import FlatButton from 'material-ui/FlatButton';



export default class Login extends Component {
  static muiName = 'FlatButton';

  render() {
    return (
      <FlatButton {...this.props} label="Login" />
    );
  }
}
