import React, { PropTypes, Component } from 'react';
import classnames from 'classnames';

import './style.css';

export default class Topic extends Component {
  // static propTypes = {}
  // static defaultProps = {}
  // state = {}

  render() {
    const { className, ...props } = this.props;
    return (
      <div className={classnames('Topic', className)} {...props}>
        <h1>
          Topic
        </h1>
      </div>
    );
  }

}
