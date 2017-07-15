import React, { Component } from 'react';
import axios from 'axios';
import _ from 'lodash';
import moment from 'moment';
import Search from '../Search/index'
const BASE_URL = 'http://52.77.234.30';

class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: undefined,
      user: undefined,
      failed: false,
      query: undefined
    };
  }
  async handleSearch(query){
    let result = []
    const userData = this.state.users
    await _.map(userData, item => {
      if(item.name.toLowerCase().startsWith(query)){
        result.push(item)
      }
    })
    await this.setState({
      user: result
    })
  }
  async componentDidMount() {
    try {
      const result = []
      const { data } = await axios.get(`${BASE_URL}/presentabsent`);
      await _.map(data.present_absent, item => {
        _.map(item.users, user => {
          result.push(user)
        })
      })
      this.setState({
        users: result,
        user: result
      });
    } catch (err) {
      this.setState({ failed: true });
    }
  }

  render() {
    const createData = (data) => {
      return (
        _.map(data, (user, index) => {
            return (
              <tr>
                <td>
                  {user.date}
                </td>
                <td>
                  {user.name}
                </td>
                <td>
                  {user.status}
                </td>
                <td>
                  {user.in}
                </td>
                <td>
                  {user.out}
                </td>
                <td>
                  {user.total}
                </td>
              </tr>
            );
      })
      )
    }
    return (
      <div>
      <Search onChange={(query) => this.handleSearch(query)}></Search>
        <table className="table table-hover">
          <thead>
            <tr>
              <th>Date</th>
              <th>Name</th>
              <th>Status</th>
              <th>In</th>
              <th>Out</th>
              <th>Total Hours</th>
            </tr>
          </thead>
          <tbody>
          {!this.state.user ? 'Loading' : createData(this.state.user)}
          </tbody>
        </table>
      </div>
    );
  }
}
export default Table;
