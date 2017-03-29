import React from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';


/**
 * Default size and `mini` FABs, in primary (default), `secondary` and `disabled` colors.
 */
const NewDraftAction = () => (
    <FloatingActionButton 
    style={style}
    onTouchTap={() => { console.log("YEP") }}
    disabled={false}
    zDepth={1}>
      <ContentAdd />
    </FloatingActionButton>
);

const style = {
    margin: 0,
    top: 'auto',
    right: 5,
    bottom: 10,
    left: 'auto',
    position: 'fixed',
};

export default NewDraftAction;