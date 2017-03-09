import React from 'react';
import { ListItem } from 'material-ui/List';
import FlatButton from 'material-ui/FlatButton'// Needed for onTouchTap


  export default function DraftListItem (props) {

   function handleOnTouchTapDraft(event){
     props.onTouchTapDraft(event)
   } 

        return (
            <ListItem className="list-item" 
            onTouchTap={e => props.onTouchTapDraft(e)}
            primaryText={ props.title }
            secondaryText={ props.text }
            />
        )
}
