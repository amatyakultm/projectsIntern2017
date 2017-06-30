import React, { Component } from 'react';
import { Doughnut,defaults, Pie } from 'react-chartjs-2'
import axios from 'axios'
import _ from 'lodash'
import ReactLoading from 'react-loading'
import Style from '../styles/Style.css'
defaults.global.legend.display = false
class TableData extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    // const createData = _.map(this.props.users, (user, index) => {
    //   let array = []
    //   _.each(user.user, (i, index2) => {
    //     array.push(
    //       <tr key={`position-${index}-user-${index2}`}>
    //         <td>{user.position}</td>
    //         <td>{i.name}</td>
    //         <td>{i.total_hour}</td>
    //         <td>{i.manday}</td>
    //       </tr>
    //     )
    //   })
    //   return (
    //     { array }
    //   )
    // })
    const createData = _.map(this.props.users, (user, index) => {
      let array = []
      _.map(user.user, (i, index2) => {
        array.concat([i.name, i.total_hour, i.manday])
      })
      return (
        <tr key={index}>
          <td>{user.position}</td>
          {
            array.map((one, i) => {
              return <td key={i}>{one}</td>
            })
          }
        </tr>
      )
    })

    return (
      <div className="col-lg-9 col-md-8 col-sm-6 col-12">
        <table className="table">
          <thead className="thead-inverse">
            <tr>
              <th>Role</th>
              <th>Name</th>
              <th>Work Hrs</th>
              <th>Man Days</th>
            </tr>
          </thead>
          <tbody>
            {createData}
          </tbody>
        </table>
      </div>
    );
  }
}
export default TableData;
