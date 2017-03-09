import React, {Component} from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';

import { LoginButton, Logged } from '../components'


class AppToolbar extends Component {

    constructor(props) {
      super(props);
      this.state = {
        logged: true,
      };
    }

  handleChange = (event, logged) => {
    this.setState({logged: logged});
  };

  render() {
    return (
      <div>
        {/*<Toggle
          label="Logged"
          defaultToggled={true}
          onToggle={this.handleChange}
          labelPosition="right"
          style={{margin: 20}}
        />*/}
        <AppBar
          title="essay"
          iconElementLeft={<IconButton><NavigationClose /></IconButton>}
          iconElementRight={this.state.logged ? <Logged /> : <LoginButton />}
        />
      </div>
    );
  }
}

export default AppToolbar;