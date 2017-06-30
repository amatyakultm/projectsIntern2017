import React, { Component } from 'react';
import { defaults, Pie } from 'react-chartjs-2';
import axios from 'axios';
import _ from 'lodash';
import ReactLoading from 'react-loading';
import Style from '../styles/Style.css';
defaults.global.legend.display = false;

class TableData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      failed: false,
      projects: []
    };
    console.log(this.props);
  }
  // getProjectDetail() {
  //   axios
  //     .get(`http://52.77.234.30/projects/${this.props.users.projectid}/detail`)
  //     .then(response => {
  //       this.setState({
  //         projects: response.data.projectData
  //       });
  //       console.log(this.state.pojects);
  //     })
  //     .catch(err => {
  //       this.setState({
  //         failed: true
  //       });
  //       //console.log(err)
  //     });
  // }
  // componentDidMount() {
  //   this.getProjectDetail();
  // }

  render() {
    const loadingData = () => {
      return <div>Loading</div>;
    };
    if (this.state.failed) {
      return <h3>Network Error.</h3>;
    }
    return (
      <div className="col-lg-9 col-md-8 col-sm-6 col-12">
        <table className="table">
          <thead>
            <tr>
              <th>Role</th>
              <th>Name</th>
              <th>Work Hrs</th>
              <th>Man Days</th>
            </tr>
          </thead>
          <tbody>
            {/*{createData}*/}
            {_.map(this.props.users, (position, index) => {
              var eiei = [];
              _.map(position.user, (user, index2) => {
                eiei.push(
                  <tr key={index + index2}>
                    <td> {position.position}</td>
                    <td>{user.name}</td>
                    <td>{parseInt(user.total_hour / 1000 / 60 / 60)}</td>
                    <td>{user.manday}</td>
                  </tr>
                )
              })
              return eiei
            })
            }
          </tbody>
        </table>
      </div>
    );
  }
}
export default TableData;
