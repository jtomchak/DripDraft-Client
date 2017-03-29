import React, {Component} from 'react';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';

import { cache } from '../services/cacheService'



const Logged = function({ handleOnChange }) {

  return (
    <IconMenu
      iconButtonElement={
        <IconButton><MoreVertIcon /></IconButton>
      }
      targetOrigin={{horizontal: 'right', vertical: 'top'}}
      anchorOrigin={{horizontal: 'right', vertical: 'top'}}
    >
      <MenuItem primaryText="Help" />
      <MenuItem 
      primaryText="Sign out"
      onTouchTap={e => handleOnChange(event, false)}
      />
    </IconMenu>
  )};

Logged.muiName = 'IconMenu';
module.exports = Logged;
