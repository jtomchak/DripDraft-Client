import React, { Component } from 'react';
import classnames from 'classnames';
import DraftList from '../../containers/DraftList';
import './style.css';


export default class TopicDraft extends Component {
constructor(props) {
  super(props);
} 
componentDidMount() {
}

  render() {
    return (
        <div>
            <DraftList {...this.props} />
        </div>
    );
  }

}
