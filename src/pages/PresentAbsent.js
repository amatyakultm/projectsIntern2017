import React, { Component } from 'react';
import { Button, ButtonGroup } from 'react-bootstrap';
import './PresentAbsent.css';

class Present extends Component {
  render() {
    return (
      <div>
        <ButtonGroup>
          <Button className="bt1">Table</Button>
          <Button className="bt2">Calendar</Button>
        </ButtonGroup>
      </div>
    );
  }
}
export default Present;
