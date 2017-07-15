import React, { Component } from 'react';
import './Filter.css';

class Filter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      absent: true,
      normal: true,
      overwork: true,
      underwork: true
    };
    this.onChangeAbsent = this.onChangeAbsent.bind(this);
    this.onChangeNormal = this.onChangeNormal.bind(this);
    this.onChangeOverwork = this.onChangeOverwork.bind(this);
    this.onChangeUnderwork = this.onChangeUnderwork.bind(this);
  }

  async onChangeAbsent(e) {
    await this.setState({
      absent: !this.state.absent
    });
    await this.props.onFilter(this.state)
  }

  async onChangeNormal(e) {
    await this.setState({
      normal: !this.state.normal
    });
    await this.props.onFilter(this.state)
  }

  async onChangeOverwork(e) {
    await this.setState({
      overwork: !this.state.overwork
    });
    await this.props.onFilter(this.state)
  }

  async onChangeUnderwork(e) {
    await this.setState({
      underwork: !this.state.underwork
    });
    await this.props.onFilter(this.state)
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
              value="Absent"
              checked={!this.state.absent ? false : true}
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
              value="Normal"
              checked={!this.state.normal ? false : true}
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
              value="Overwork"
              checked={!this.state.overwork ? false : true}
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
              value="Underwork"
              checked={!this.state.underwork ? false : true}
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
