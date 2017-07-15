import React, { Component } from 'react';
import axios from 'axios';
import _ from 'lodash';
import moment from 'moment';
import Search from '../Search/index'
import Filter from './Filter'
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
      user: result,
      tmpUser: result
    })
  }

  async handleFilter(type){
    let data
    if(!this.state.tmpUser){
      data = this.state.users
    }else{
      data = this.state.tmpUser
    }
    console.log(data)
    if(type.absent && type.normal && type.overwork && type.underwork){
      await this.setState({
        user: _.filter(data, i => i.status !== '')
      })
    }else if(!type.absent && !type.normal && !type.overwork && !type.underwork){
      await this.setState({
        user: _.filter(data, i => i.status !== 'Absent' && i.status !== 'Normal' && i.status !== 'Overwork' && i.status !== 'Underwork')
      })
    }else if(!type.absent && type.normal && type.overwork && type.underwork){
      await this.setState({
        user: _.filter(data, i => i.status !== 'Absent')
      })
    }else if(!type.absent && !type.normal && type.overwork && type.underwork){
      await this.setState({
        user: _.filter(data, i => i.status !== 'Absent' && i.status !== 'Normal')
      })
    }else if(!type.absent && !type.normal && !type.overwork && type.underwork){
      await this.setState({
        user: _.filter(data, i => i.status !== 'Absent' && i.status !== 'Normal' && i.status !== 'Overwork')
      })
    }
    else if(!type.absent && !type.normal && !type.overwork && type.underwork){
      await this.setState({
        user: _.filter(data, i => i.status !== 'Absent' && i.status !== 'Normal' && i.status !== 'Overwork')
      })
    }
    
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
      <Filter onFilter={(type) => this.handleFilter(type)}></Filter>
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
