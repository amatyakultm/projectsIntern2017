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
    const pathname = _.get(this.props, ['location', 'pathname']).replace(
      'present_absent/',
      ''
    );

    const tableButtonStyle =
      pathname === '/' || pathname === '/table' ? 'active' : undefined;
    const calendarButtonStyle = pathname === '/calendar' ? 'active' : undefined;
    return (
      <div>
        <ButtonGroup>
          <Button
            className={`bt1 ${tableButtonStyle}`}
            onClick={() => this.changeURL('/present_absent/table')}
          >
            Table
          </Button>
          <Button
            className={`bt2 ${calendarButtonStyle}`}
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
