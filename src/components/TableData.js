import React, { Component } from 'react';
import { Doughnut, defaults, Pie } from 'react-chartjs-2';
import axios from 'axios';
import _ from 'lodash';
import ReactLoading from 'react-loading';
import moment from 'moment';
import Color from './Mapping/color';
import Style from '../styles/Style.css';
import {
  Modal,
  ModalHeader,
  ModalTitle,
  ModalClose,
  ModalBody,
  ModalFooter
} from 'react-modal-bootstrap';

defaults.global.legend.display = false;
class TableData extends Component {
  constructor(props) {
    super(props);
    console.log(this.props);
    this.state = {
      cur_user: undefined,
      isOpen: false,
      cur_name: undefined,
      cur_position: undefined
    };
    this.openModal = this.openModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
  }

  openModal() {
    this.setState({
      isOpen: true
    });
  }

  hideModal() {
    this.setState({
      isOpen: false,
      userdatas: undefined,
      userdata: undefined
    });
  }

  getUserData(userid) {
    axios
      .get(
        `http://52.77.234.30/projects/${this.props
          .project_id}/user/${userid}?start=${this.props.start}&end=${this.props
          .end}`
      )
      .then(response => {
        this.setState({
          userdatas: response.data.userdata,
          userdata: response.data.userdata
        });
        console.log(this.state.userdata);
      })
      .catch(err => {
        this.setState({
          failed: true
        });
      });
  }

  handleClickTr(userid, name, position) {
    console.log('userid: ', userid);
    this.setState({
      isOpen: true,
      cur_user: userid,
      cur_name: name,
      cur_position: position
    });
    this.getUserData(userid);
  }

  handleSearchUserData(e) {
    const query = e.target.value.toLowerCase();
    let result = [];
    _.map(this.state.userdatas, item => {
      if (
        _.includes(item.description.toLowerCase(), query.toLowerCase()) ||
        _.includes(item.date.toLowerCase(), query.toLowerCase())
      ) {
        result.push(item);
      }
    });
    this.setState({
      userdata: result
    });
  }

  render() {
    const time = time =>
      ((time / 3600000) | 0) + 'h ' + ((time % 3600000 / 60000) | 0) + 'm';

    // const createData = _.map(this.props.users, (user, index) => {
    //   let array = []
    //   _.each(user.user, (i, index2) => {
    //     console.log(user.position)
    //     //   <tr>
    //     //     <td>{user.position}</td>
    //     //     <td>{i.name}</td>
    //     //     <td>{i.total_hour}</td>
    //     //     <td>{i.manday}</td>
    //     //   </tr>
    //   })
    //   return (
    //     <a></a>
    //   )
    // })
    // const createData = _.map(this.props.users, (user, index) => {
    //   var array = []
    //   _.map(user.user, (i, index2) => {
    //     console.log(i)
    //   })
    //   console.log('====================================');
    //   console.log(array);
    //   console.log('====================================');
    //   return (
    //     <tr key={index}>
    //       {
    //         array.map((one, i) => {
    //           return <td key={i}>{one}</td>
    //         })
    //       }
    //     </tr>
    //   )
    // })
    // const createData = _.map(this.props.users, (user, index) => {
    // let array = []
    // let xx = {}
    // _.map(user.user, (i, index2) => {
    //     <td>{i.name}</td>
    //     <td>{i.total_hour}</td>
    //     <td>{i.manday}</td>
    //   })
    // })
    //   return (
    //       <td>{user.position}</td>
    //       {
    //         _.map(user.user, (item)=> (
    //           <td>{item.name}</td>
    //         ))
    //       }
    //     </tr>
    //   )
    // })
    const loadingData = () => {
      return (
        <div className="col align-self-center loading">
          <img src="./assets/img/loading.svg" alt="" width="50" />
        </div>
      );
    };

    const createUserData = () => {
      return (
        <div>
          <input
            type="text"
            className="form-control"
            placeholder="Search"
            onChange={e => this.handleSearchUserData(e)}
          />
          <table className="table">
            <thead className="thead-inverse">
              <tr>
                <th>Date</th>
                <th>Task</th>
                <th>Work Hours</th>
              </tr>
            </thead>
            <tbody>
              {_.map(this.state.userdata, (item, index) => {
                return (
                  <tr key={index}>
                    <td>
                      {moment(item.date).format('DD MMM YYYY')}
                    </td>
                    <td>
                      {item.description}
                    </td>
                    <td>
                      {item.total_hour}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      );
    };

    return (
      <div className="col-lg-9 col-md-8 col-sm-6 col-12">
        <table className="table table-hover fonttable">
          <thead className="thead-inverse">
            <tr>
              <th>Role</th>
              <th>Name</th>
              <th>Work Hrs</th>
              <th>Man Days</th>
              <th>Billable</th>
              <th>Non-Billable</th>
            </tr>
          </thead>
          <tbody>
            {_.map(this.props.users, (user, index) => {
              let currentPosition = undefined;
              return _.map(user.user, item => {
                var positionList = [
                  'Project Management Officer',
                  'Frontend Developer',
                  'Backend Developer',
                  'Quality Assurance Engineer',
                  'Business Analyst',
                  'Designer',
                  'Mobile Developer',
                  'HR Director',
                  'Co-Founder',
                  'Technical Lead',
                  'Application Support'
                ];
                var color = '';
                if (user.position === positionList[0]) {
                  color = '#EE1F79';
                } else if (user.position === positionList[1]) {
                  color = '#9E65AB';
                } else if (user.position === positionList[2]) {
                  color = '#7360AC';
                } else if (user.position === positionList[3]) {
                  color = '#0052A6';
                } else if (user.position === positionList[4]) {
                  color = '#00A7BC';
                } else if (user.position === positionList[5]) {
                  color = '#04A54A';
                } else if (user.position === positionList[6]) {
                  color = '#8FC630';
                } else if (user.position === positionList[7]) {
                  color = '#FFF200';
                } else if (user.position === positionList[8]) {
                  color = '#FFB700';
                } else if (user.position === positionList[9]) {
                  color = '#C9302C';
                } else if (user.position === positionList[10]) {
                  color = '#F46A1C';
                } else if (user.position === positionList[11]) {
                  color = 'gray';
                }
                let position;
                if (currentPosition !== user.position) {
                  currentPosition = user.position;
                  position = user.position;
                } else {
                  position = '';
                }

                return (
                  <tr
                    className="tr_userdata"
                    onClick={() =>
                      this.handleClickTr(item.id, item.name, user.position)}
                  >
                    <td>
                      {!position
                        ? ''
                        : <span>
                            <Color color={color} />
                            {position}
                          </span>}
                    </td>
                    <td>
                      {item.name}
                    </td>
                    <td style={{ textAlign: 'right' }}>
                      {time(item.total_hour)}
                    </td>
                    <td style={{ textAlign: 'center' }}>
                      {item.manday}
                    </td>
                    <td style={{ textAlign: 'right' }}>
                      {item.sum_billable}
                    </td>
                    <td style={{ textAlign: 'right' }}>
                      {item.sum_nonbillable}
                    </td>
                  </tr>
                );
              });
            })}
          </tbody>
        </table>
        <Modal isOpen={this.state.isOpen} onRequestHide={this.hideModal}>
          <ModalHeader>
            <ModalClose onClick={this.hideModal} />
            <ModalTitle>
              {this.state.cur_name} : {this.state.cur_position}
            </ModalTitle>
          </ModalHeader>
          <ModalBody>
            {!this.state.userdatas ? loadingData() : createUserData()}
          </ModalBody>
        </Modal>
      </div>
    );
  }
}
export default TableData;
