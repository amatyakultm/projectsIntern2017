import React, { Component } from 'react';
import axios from 'axios';
import _ from 'lodash';
import moment from 'moment';
import '../../styles/Style.css';
const BASE_URL = 'http://52.77.234.30';
class SettingPosition extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: undefined,
      user: undefined,
      failed: false
    };
  }

  async componentDidMount() {
    try {
      const { data } = await axios.get(`${BASE_URL}/users`);
      const { data: positionData } = await axios.get(`${BASE_URL}/positions`);
      this.setState({
        users: data.users,
        user: data.users,
        positions: positionData.positions
      });
      console.log(this.state);
    } catch (err) {
      this.setState({ failed: true });
    }
  }

  render() {
    const loadingData = () => {
      return (
        <div className="col align-self-center loading">
          <img src="./assets/img/loading.svg" alt="" width="50" />
        </div>
      );
    };

    const createData = _.map(this.state.users, user => {
      return (
        <tr>
          <td>
            {user.name}
          </td>
          <td>
            <select className="form-control">
              {_.map(this.state.positions, position => {
                return (
                  <option
                    selected={user.position_id === position.id ? true : false}
                  >
                    {position.name}
                  </option>
                );
              })}
            </select>
          </td>
          <td>
            <button className="btn btn-success">Save</button>
          </td>
        </tr>
      );
    });

    return (
      <div>
        <div className="row">
          <div className="col-md-12">
            <h3>Setting Position</h3>
            <table className="table">
              <thead className="thead-inverse">
                <tr>
                  <th>Name</th>
                  <th>Position</th>
                  <th />
                </tr>
              </thead>
              <tbody>
                {!this.state.users ? loadingData() : createData}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}
export default SettingPosition;
