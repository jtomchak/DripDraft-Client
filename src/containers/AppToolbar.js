import React, {Component} from 'react';
import AppBar from 'material-ui/AppBar';

import { LoginButton, Logged } from '../components'


class AppToolbar extends Component {

    constructor(props) {
      super(props);
      this.state = {
        logged: true,
      };
    }

  handleOnChange (event, logged) {
    this.setState({logged: logged});
    if (!logged) {
      this.props.router.push(`/login`) 
    }
  }


  render() {
    return (
      <div>
        <AppBar
          title="essay"
          iconElementRight={this.state.logged ? 
          <Logged handleOnChange={this.handleOnChange.bind(this)} /> : 
          <LoginButton onTouchTap={this.handleOnChange.bind(this)} />}
        />
      </div>
    );
  }
}

export default AppToolbar;