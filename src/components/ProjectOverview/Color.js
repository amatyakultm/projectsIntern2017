import React, { Component } from 'react';
import _ from 'lodash';

class Color extends Component {
  render() {
    const style = {
      width: '15px',
      height: '15px',
      backgroundColor: this.props.color,
      borderRadius: '50%',
      float: 'left',
      marginRight: '4px',
      marginTop: '4px',
      marginLeft: '5px'
      // display: 'inline'
    };

    return <div style={style} />;
  }
}
export default Color;
