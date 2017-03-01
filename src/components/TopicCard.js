import React from 'react';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton'// Needed for onTouchTap
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

  export default function TopicCard (props, context) {
    console.log(props);
    console.log(context);
        return (
          <Card>
            <CardHeader
              title={props.name}
              actAsExpander={true}
              showExpandableButton={true}
            />
            <CardActions>
              <FlatButton 
              onTouchTap={() => props.onTouchTap()}
              label="New Draft" />
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
