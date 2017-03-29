import React, {Component} from 'react';
import FlatButton from 'material-ui/FlatButton';



export default class Login extends Component {
  constructor(props) {
  super(props);
  console.log(props);
} 
  static muiName = 'FlatButton';

  render() {
    return (
      <FlatButton {...this.props}
      style={this.props.style} 
      label="Login" 
      onTouchTap={e => this.props.onTouchTap(event, false)}/>
    );
  }
}
