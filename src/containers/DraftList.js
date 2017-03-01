import React, { PropTypes, Component } from 'react';
import classnames from 'classnames';
import { fetchDrafts } from '../services/draftService';


export default class DraftList extends Component {

constructor(props) {
  super(props);
  this.state = {
    topicId: this.props.params.topicId,
    drafts: []
  };
  this.getDrafts = this.getDrafts.bind(this);
} 
componentDidMount() {
  this.getDrafts();
}

getDrafts() {
  var dataDrafts = [];
  var tempDrafts = fetchDrafts(this.state.topicId);
  tempDrafts
  .then(data => {
    dataDrafts = Array.from(data);
    if (dataDrafts.length > 0){
      this.setState({
        drafts: dataDrafts
      });
    }
  })
  .catch(error => {
    console.log(error);
  })
}
render() {
    return(
        <div>
            {this.state.topicId}
        </div>
    )
}

}