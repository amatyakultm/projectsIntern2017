import React, { Component } from 'react';
import axios from 'axios';
import _ from 'lodash';
import moment from 'moment';
const BASE_URL = 'http://52.77.234.30';

class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: undefined,
      failed: false
    };
  }

  async componentDidMount() {
    try {
      const { data } = await axios.get(`${BASE_URL}/presentabsent`);
      this.setState({
        users: data.present_absent
      });
    } catch (err) {
      this.setState({ failed: true });
    }
  }

  render() {
    return (
      <div>
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
            {!this.state.users
              ? 'Loading Data'
              : _.map(this.state.users, (user, index) => {
                  {
                    console.log(user);
                    /*return (
                    <tr key={index}>
                      <td>
                        {moment(user.start).format('YYYY-MM-DD')}
                      </td>
                      <td>
                        {user.user}
                      </td>
                    </tr>
                  );*/
                    return _.map(user.users, item => {
                      return (
                        <tr>
                          <td>
                            {user.date}
                          </td>
                          <td>
                            {item.name}
                          </td>
                          <td>
                            {item.status}
                          </td>
                          <td>
                            {item.in}
                          </td>
                          <td>
                            {item.out}
                          </td>
                          <td>
                            {item.total}
                          </td>
                        </tr>
                      );
                    });
                  }
                })}
          </tbody>
        </table>
      </div>
    );
  }
}
export default Table;
