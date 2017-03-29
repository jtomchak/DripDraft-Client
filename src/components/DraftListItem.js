import React from 'react';
import FlatButton from 'material-ui/FlatButton'// Needed for onTouchTap


export default function DraftListItem (props) {

   function handleOnTouchTapDraft(event){
     props.onTouchTapDraft(event)
   } 

        return (
            <div className="list-item" 
            style={style}
            onTouchTap={e => props.onTouchTapDraft(e)}
            >
            { props.title }
            </div>
        )
}

const style = {
  height: 40,
};
