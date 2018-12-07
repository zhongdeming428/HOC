import React from 'react';
import Clickable from '../decorators/CursorPointer';

@Clickable
class ClickablePanel extends React.Component {
  render() {
    return <div className="panel">

    </div>
  }
}

export default ClickablePanel;