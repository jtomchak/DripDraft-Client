import React, { PropTypes, Component } from 'react';
import classnames from 'classnames';
import { List } from 'react-virtualized/dist/commonjs/List';
import { fetchDrafts } from '../services/draftService';
import { DraftListItem, NewDraftAction } from '../components'

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

onTouchTapDraft(topic, event) {
  event.preventDefault();
  console.log("tappie tap tap");
}


rowRenderer ({
  key,         // Unique key within array of rows
  index,       // Index of row within collection
  isScrolling, // The List is currently being scrolled
  isVisible,   // This row is visible within the List (eg it is not an overscanned row)
  style        // Style object to be applied to row (to position it)
}) {
  const draft = this.state.drafts[index];
  let onTouchTap = this.onTouchTapDraft.bind(this, draft);
      return (
       <DraftListItem
        onTouchTapDraft={onTouchTap} 
        key={draft._id}
        {...draft}/>
      )
}
  
render() {
    return (
      <div>
        <List
          width={300}
          height={300}
          rowCount={this.state.drafts.length}
          rowHeight={20}
          rowRenderer={this.rowRenderer.bind(this)}
        />
        <NewDraftAction />
      </div>
    )} 
}