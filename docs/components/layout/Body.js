'use strict';

import React from 'react';

export class Body extends React.Component {

  render() {
    return (
      <div is="body">
        <style>{`
          .flexbox-fix {
            display: -webkit-box;
            display: -moz-box;
            display: -ms-flexbox;
            display: -webkit-flex;
            display: flex;
          }
        `}</style>

        <this.props.component />
      </div>
    );
  }
}

export default Body;
