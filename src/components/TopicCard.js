import React from 'react';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton'// Needed for onTouchTap


  export default function TopicCard (props) {

   function handleOnTouchTapNewDraft(event){
     props.onTouchTapNewDraft(event)
   } 

        return (
          <Card>
            <CardHeader
              title={props.name}
              subtitle={"Streak: " + props.streak}
              actAsExpander={true}
              showExpandableButton={true}
            />
            <CardActions>
              <FlatButton 
              onTouchTap={e => handleOnTouchTapNewDraft(e)}
              label="Drafts" />
            </CardActions>
            <CardText expandable={true}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
              Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
              Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
            </CardText>
          </Card>
        )
}
