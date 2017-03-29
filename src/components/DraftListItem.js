import React from 'react';
import { ListItem } from 'material-ui/List';
import FlatButton from 'material-ui/FlatButton'// Needed for onTouchTap


export default function DraftListItem (props) {

   function handleOnTouchTapDraft(event){
     props.onTouchTapDraft(event)
   } 

        return (
            <li className="list-item" 
            style={style}
            onTouchTap={e => props.onTouchTapDraft(e)}
            primaryText={ props.title }
            secondaryText={ props.text }
            />
        )
}

const style = {
  height: 40,
};
