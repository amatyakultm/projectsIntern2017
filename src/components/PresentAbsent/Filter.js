import React, { Component } from 'react';
import './Filter.css';

class Filter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      absent: '',
      normal: '',
      overwork: '',
      underwork: ''
    };
    this.onChangeAbsent = this.onChangeAbsent.bind(this);
    this.onChangeNormal = this.onChangeNormal.bind(this);
    this.onChangeOverwork = this.onChangeOverwork.bind(this);
    this.onChangeUnderwork = this.onChangeUnderwork.bind(this);
  }

  onChangeAbsent(e) {
    this.setState({
      absent: !this.state.absent
    });
    this.state.absent == false
      ? this.setState({ absent: e.target.value })
      : this.setState({ absent: '' });
  }

  onChangeNormal(e) {
    this.setState({
      normal: !this.state.normal
    });
    this.state.normal == false
      ? this.setState({ normal: e.target.value })
      : this.setState({ normal: '' });
  }

  onChangeOverwork(e) {
    this.setState({
      overwork: !this.state.overwork
    });
    this.state.overwork == false
      ? this.setState({ overwork: e.target.value })
      : this.setState({ overwork: '' });
  }

  onChangeUnderwork(e) {
    this.setState({
      underwork: !this.state.underwork
    });
    this.state.underwork == false
      ? this.setState({ underwork: e.target.value })
      : this.setState({ underwork: '' });
  }

  render() {
    return (
      <div>
        <div className="dropdown" style={{ marginTop: '20px' }}>
          <button
            className="btn btn-danger dropdown-toggle"
            type="button"
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Filter
          </button>
          <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <input
              id="checkbox-1"
              className="checkbox-custom input"
              name="checkbox-1"
              type="checkbox"
              style={{
                marginLeft: '20px',
                width: '19px',
                height: '19px',
                backgroundColor: 'white'
              }}
              type="checkbox"
              value="level=Normal"
              checked={!this.state.absent}
              onChange={this.onChangeAbsent}
            />
            <label for="checkbox-1" className="checkbox-custom-label">
              Absent
            </label>{' '}
            <br />
            <input
              id="checkbox-1"
              className="checkbox-custom input"
              name="checkbox-1"
              type="checkbox"
              style={{
                marginLeft: '20px',
                width: '19px',
                height: '19px',
                backgroundColor: 'white'
              }}
              type="checkbox"
              value="level=Normal"
              checked={!this.state.normal}
              onChange={this.onChangeNormal}
            />
            <label for="checkbox-1" className="checkbox-custom-label">
              Normal
            </label>{' '}
            <br />
            <input
              id="checkbox-1"
              className="checkbox-custom input"
              name="checkbox-1"
              type="checkbox"
              style={{ marginLeft: '20px', width: '19px', height: '19px' }}
              type="checkbox"
              value="level=Overwork"
              checked={!this.state.overwork}
              onChange={this.onChangeOverwork}
            />
            <label for="checkbox-1" className="checkbox-custom-label">
              Overwork
            </label>{' '}
            <br />
            <input
              id="checkbox-1"
              className="checkbox-custom input"
              name="checkbox-1"
              type="checkbox"
              style={{ marginLeft: '20px', width: '19px', height: '19px' }}
              type="checkbox"
              value="level=Underwork"
              checked={!this.state.underwork}
              onChange={this.onChangeUnderwork}
            />
            <label for="checkbox-1" className="checkbox-custom-label">
              Underwork
            </label>{' '}
            <br />
            {/*<div>
                            <input id="checkbox-1" className="checkbox-custom input" name="checkbox-1" type="checkbox" />
                            <label for="checkbox-1" className="checkbox-custom-label">First Choice</label>
                        </div>*/}
          </div>
        </div>
      </div>
    );
  }
}
export default Filter;
