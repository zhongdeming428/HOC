import React from 'react';

export default Component => class extends React.Component {
  render() {
    return <div style={{cursor: 'pointer', display: 'inline-block'}}>
      <Component/>
    </div>
  }
}