import React, { Component } from 'react';
import classnames from 'classnames';

import { Topics }  from '../../containers';
import './style.css';


export default class Topic extends Component {
constructor(props) {
  super(props);
} 
componentDidMount() {
}

  render() {
    return (
      <Topics />
    );
  }

}
