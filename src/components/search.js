import React, { Component } from 'react';
import _ from 'lodash';
import axios from 'axios';
import moment from 'moment';
import '../styles/Style.css';
const DAY_FORMAT = 'YYYY-MM-DD';
class datePicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      failed: false,
      data: [],
      fromRef: this.props.from,
      toRef: this.props.to
    };
  }

  handleFrom(e) {
    const from = e.target.value;
    this.setState({
      fromRef: from
    });
    console.log('from ' + from);
  }

  handleTo(e) {
    const to = e.target.value;
    this.setState({
      toRef: to
    });
    console.log('to ' + to);
  }

  handleFromTo() {
    this.props.isLoad();
    const fromRef = this.state.fromRef;
    const toRef = this.state.toRef;
    axios
      .get(
        `http://52.77.234.30/api/sumprojectposition?start=${fromRef}&end=${toRef}`
      )
      .then(response => {
        console.log(response);
        this.props.onChange({
          projects: response.data.sumprojects,
          project: response.data.sumprojects,
          from: response.data.start,
          to: response.data.end
        });
      })
      .catch(err => {
        this.setState({
          failed: true
        });
      });
  }
  render() {
    return (
      <div>
        <span className="fromto">From </span>
        <input
          className="form-control fromto_input"
          type="date"
          value={moment(this.state.fromRef).format(DAY_FORMAT)}
          onChange={e => this.handleFrom(e)}
        />
        <span className="fromto">To </span>
        <input
          className="form-control fromto_input"
          type="date"
          value={moment(this.state.toRef).format(DAY_FORMAT)}
          onChange={e => this.handleTo(e)}
        />
        <button
          className="btn btn-sm btn-danger"
          onClick={() => this.handleFromTo()}
        >
          Submit
        </button>
      </div>
    );
  }
}

export default datePicker;
