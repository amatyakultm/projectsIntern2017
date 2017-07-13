import React, { Component } from 'react';
import _ from 'lodash';
import { Button, ButtonGroup } from 'react-bootstrap';
import { browserHistory } from 'react-router';
import './ViewMode.css';

class ViewMode extends Component {
  changeURL(url) {
    browserHistory.push(url);
  }

  render() {
    console.log('Looo = ', this.props);
    return (
      <div>
        <ButtonGroup>
          <Button
            className="bt1 active"
            onClick={() => this.changeURL('/present_absent/table')}
          >
            Table
          </Button>
          <Button
            className="bt2"
            onClick={() => this.changeURL('/present_absent/calendar')}
          >
            Calendar
          </Button>
        </ButtonGroup>
        <div className="container-table">
          {this.props.children}
        </div>
      </div>
    );
  }
}
export default ViewMode;
