import React, { PropTypes, Component } from 'react';
import classnames from 'classnames';
import { List } from 'react-virtualized/dist/commonjs/List'
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

render() {
  const draftListItems =  this.state.drafts.map((draft) => {
    let onTouchTap = this.onTouchTapDraft.bind(this, draft);
      return ( <DraftListItem
        onTouchTapDraft={onTouchTap} 
        key={draft._id}
        {...draft}/>
      )
  })

    return(
      <div>
        <ul>
            { draftListItems }
        </ul>
        <NewDraftAction />
      </div>
    )
}

}

const style = {

};
