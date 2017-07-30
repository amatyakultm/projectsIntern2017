import React, { Component } from 'react';
import axios from 'axios';
import _ from 'lodash';
import moment from 'moment';
import Search from './Search';
import Filter from './Filter';
import FilterPosition from './FilterPosition';
import {
  Modal,
  ModalHeader,
  ModalTitle,
  ModalClose,
  ModalBody,
  ModalFooter
} from 'react-modal-bootstrap';
import '../styles/Style.css';
const BASE_URL = 'http://54.254.251.53';
const DAY_FORMAT = 'YYYY-MM-DD';
class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: undefined,
      user: undefined,
      failed: false,
      query: undefined,
      roleAsc: true,
      idAsc: true,
      nameAsc: true,
      totalAsc: true,
      billableAsc: true,
      mandayAsc: true,
      isOpen: false
    };
    this.openModal = this.openModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
    this.handleClickTr = this.handleClickTr.bind(this);
    this.handleOnChangeFilter = this.handleOnChangeFilter.bind(this);
    //this.handleSubmit = this.handleSubmit.bind(this);
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

  // handleSubmit(event) {
  //   event.preventDefault();
  // }

  async handleSearch(query) {
    let result = [];
    const userData = this.state.users;
    await _.map(userData, item => {
      if (item.name.toLowerCase().startsWith(query)) {
        result.push(item);
      }
    });
    await this.setState({
      user: result,
      tmpUser: result
    });
  }

  async componentDidMount() {
    try {
      const { data } = await axios.get(`${BASE_URL}/employee`);
      this.setState({
        users: data.employee_data,
        user: data.employee_data,
        from: data.start,
        to: data.end
      });
      console.log(this.state);
    } catch (err) {
      this.setState({ failed: true });
    }
  }

  async handleFromTo() {
    console.log(this.refs.from.value);
    console.log(this.refs.to.value);
    let from = this.refs.from.value;
    let to = this.refs.to.value;
    if (to < from) {
      from = to;
    }
    this.setState({
      users: null,
      user: null
    });
    try {
      const { data } = await axios.get(
        `${BASE_URL}/employee?start=${from}&end=${to}`
      );
      this.setState({
        users: data.employee_data,
        user: data.employee_data,
        from: data.start,
        to: data.end
      });
    } catch (err) {
      this.setState({ failed: true });
    }
  }

  handleUpdateDate(event) {
    const { id, value } = event.target;
    if (!_.isEmpty(value)) {
      this.setState({ [id]: value });
    }
  }

  handleClickTr(userData) {
    console.log('userdata: ', userData);
    this.setState({
      isOpen: true,
      userdatas: userData.data,
      userdata: userData.data
    });
  }

  handleSearchUserData(e) {
    const query = e.target.value.toLowerCase();
    let result = [];
    _.map(this.state.userdatas, item => {
      if (item.project !== null && item.description !== null) {
        if (
          _.includes(item.description.toLowerCase(), query.toLowerCase()) ||
          _.includes(item.project.toLowerCase(), query.toLowerCase())
        ) {
          result.push(item);
        }
      }
    });
    this.setState({
      userdata: result
    });
  }

  async handleSort(type) {
    let userData = this.state.user;
    switch (type) {
      case 'role': {
        if (this.state.roleAsc) {
          userData = await _.orderBy(userData, 'position', 'desc');
          this.setState({
            roleAsc: false
          });
        } else {
          userData = await _.orderBy(userData, 'position', 'asc');
          this.setState({
            roleAsc: true
          });
        }
        this.setState({
          user: userData
        });
        break;
      }
      case 'id': {
        if (this.state.idAsc) {
          userData = await _.orderBy(userData, 'id', 'desc');
          this.setState({
            idAsc: false
          });
        } else {
          userData = await _.orderBy(userData, 'id', 'asc');
          this.setState({
            idAsc: true
          });
        }
        this.setState({
          user: userData
        });
        break;
      }
      case 'name': {
        if (this.state.nameAsc) {
          userData = await _.orderBy(userData, 'name', 'desc');
          this.setState({
            nameAsc: false
          });
        } else {
          userData = await _.orderBy(userData, 'name', 'asc');
          this.setState({
            nameAsc: true
          });
        }
        this.setState({
          user: userData
        });
        break;
      }
      case 'total': {
        if (this.state.totalAsc) {
          userData = await _.orderBy(userData, 'total', 'desc');
          this.setState({
            totalAsc: false
          });
        } else {
          userData = await _.orderBy(userData, 'total', 'asc');
          this.setState({
            totalAsc: true
          });
        }
        this.setState({
          user: userData
        });
        break;
      }
      case 'billable': {
        if (this.state.billableAsc) {
          userData = await _.orderBy(userData, 'nonebillable', 'desc');
          this.setState({
            billableAsc: false
          });
        } else {
          userData = await _.orderBy(userData, 'nonebillable', 'asc');
          this.setState({
            billableAsc: true
          });
        }
        this.setState({
          user: userData
        });
        break;
      }
      case 'manday': {
        if (this.state.mandayAsc) {
          userData = await _.orderBy(userData, 'manday', 'desc');
          this.setState({
            mandayAsc: false
          });
        } else {
          userData = await _.orderBy(userData, 'manday', 'asc');
          this.setState({
            mandayAsc: true
          });
        }
        this.setState({
          user: userData
        });
        break;
      }
    }
  }

  handleOnChangeFilter(data) {
    const userData = this.state.users;
    if (data === 'Frontend') {
      data = 'Frontend Developer';
    }
    if (data === 'QA') {
      data = 'Quality Assurance Engineer';
    }
    if (data === 'Backend') {
      data = 'Backend Developer';
    }
    if (data === 'Project') {
      data = 'Project Management Officer';
    }
    if (data === 'BA') {
      data = 'Business Analyst';
    }
    if (data === 'Design') {
      data = 'Designer';
    }
    if (data === 'Mobile') {
      data = 'Mobile Developer';
    }
    if (data === 'HR') {
      data = 'HR Director';
    }
    if (data === 'Tech') {
      data = 'Technical Lead';
    }
    if (data === 'Cofound') {
      data = 'Co-Founder';
    }
    if (data === 'Support') {
      data = 'Application Support';
    }
    if (data === 'All') {
      data = 'All';
    }
    const user =
      data === 'All' ? userData : _.filter(userData, i => i.position === data);
    this.setState({ user });
  }

  render() {
    const time = time =>
      ((time / 3600000) | 0) + 'h ' + ((time % 3600000 / 60000) | 0) + 'm';
    const createData = data => {
      return _.map(data, (user, index) => {
        console.log(user);
        return (
          <tr className="tr_userdata" onClick={() => this.handleClickTr(user)}>
            <td>
              <div style={{ width: '25px', height: '25px', float: 'left' }}>
                {user.is_lead
                  ? <img
                      src="/assets/img/appmanblack.png"
                      style={{ width: '23px' }}
                    />
                  : ''}
                {user.id === '2413883'
                  ? <img
                      src="/assets/img/appmangenie.png"
                      style={{ width: '23px' }}
                    />
                  : ''}
              </div>{' '}
              {user.position}
            </td>
            {/*<td>
              {user.id}
            </td>*/}
            <td>
              {user.name}
            </td>
            <td className="text-right">
              {time(user.total)}
            </td>
            <td className="text-right">
              {time(user.nonebillable)}
            </td>
            <td className="text-center">
              {user.manday}
            </td>
          </tr>
        );
      });
    };

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
                <th>Project</th>
                <th>Task</th>
                <th>Work hrs</th>
              </tr>
            </thead>
            <tbody>
              {_.map(this.state.userdata, (item, index) => {
                return (
                  <tr key={index}>
                    <td style={{ width: '10%' }}>
                      {moment(item.start).format('DD MMM YYYY')}
                    </td>
                    <td style={{ width: '20%' }}>
                      {item.project}
                    </td>
                    <td style={{ width: '50%' }}>
                      {item.description}
                    </td>
                    <td style={{ width: '20%' }}>
                      {time(item.dur)}
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
      <div>
        <div className="row">
          <div className="col-md-12">
            <div className="pull-left" />
            <div className="pull-right">
              <Search onChange={query => this.handleSearch(query)} />
            </div>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-12">
            <div className="pull-left">
              <FilterPosition
                onChange={data => this.handleOnChangeFilter(data)}
              />
            </div>
            {/*<form onSubmit={() => this.handleFromTo()}>*/}
            <div className="pull-right fromto-box eee">
              {!this.state.from ? '' : <span className="fromto">From </span>}
              {!this.state.from
                ? ''
                : <input
                    className="form-control fromto_input"
                    type="date"
                    ref="from"
                    id="from"
                    max={moment().format(DAY_FORMAT)}
                    value={moment(this.state.from).format(DAY_FORMAT)}
                    onChange={e => this.handleUpdateDate(e)}
                  />}
              {!this.state.to ? '' : <span className="fromto">To </span>}
              {!this.state.to
                ? ''
                : <input
                    className="form-control fromto_input"
                    type="date"
                    ref="to"
                    id="to"
                    max={moment().format(DAY_FORMAT)}
                    value={
                      !this.state.to
                        ? 'Waiting'
                        : moment(this.state.to).format(DAY_FORMAT)
                    }
                    onChange={e => this.handleUpdateDate(e)}
                  />}
              {!this.state.to && !this.state.from
                ? ''
                : <button
                    className="btn btn-sm btn-danger"
                    onClick={() => this.handleFromTo()}
                  >
                    Submit
                  </button>}
            </div>
            {/*</form>*/}
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-md-12">
            {!this.state.user
              ? loadingData()
              : <table className="table table-hover main">
                  <thead className="thead-inverse">
                    <tr>
                      <th onClick={() => this.handleSort('role')}>
                        Role
                        {this.state.roleAsc
                          ? <i
                              className="fa fa-sort-desc pull-right"
                              aria-hidden="true"
                            />
                          : <i
                              className="fa fa-sort-asc pull-right sortt"
                              aria-hidden="true"
                            />}
                      </th>
                      {/*<th onClick={() => this.handleSort('id')}>
                        Id
                        {this.state.idAsc
                          ? <i
                              className="fa fa-sort-desc pull-right"
                              aria-hidden="true"
                            />
                          : <i
                              className="fa fa-sort-asc pull-right sortt"
                              aria-hidden="true"
                            />}
                      </th>*/}
                      <th onClick={() => this.handleSort('name')}>
                        Name
                        {this.state.nameAsc
                          ? <i
                              className="fa fa-sort-desc pull-right"
                              aria-hidden="true"
                            />
                          : <i
                              className="fa fa-sort-asc pull-right sortt"
                              aria-hidden="true"
                            />}
                      </th>
                      <th onClick={() => this.handleSort('total')}>
                        Total hrs
                        {this.state.totalAsc
                          ? <i
                              className="fa fa-sort-desc pull-right"
                              aria-hidden="true"
                            />
                          : <i
                              className="fa fa-sort-asc pull-right sortt"
                              aria-hidden="true"
                            />}
                      </th>
                      <th onClick={() => this.handleSort('billable')}>
                        Non-billable
                        {this.state.billableAsc
                          ? <i
                              className="fa fa-sort-desc pull-right"
                              aria-hidden="true"
                            />
                          : <i
                              className="fa fa-sort-asc pull-right sortt"
                              aria-hidden="true"
                            />}
                      </th>
                      <th onClick={() => this.handleSort('manday')}>
                        Man-day(s)
                        {this.state.mandayAsc
                          ? <i
                              className="fa fa-sort-desc pull-right"
                              aria-hidden="true"
                            />
                          : <i
                              className="fa fa-sort-asc pull-right sortt"
                              aria-hidden="true"
                            />}
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {createData(this.state.user)}
                  </tbody>
                </table>}
          </div>
        </div>
        <Modal
          isOpen={this.state.isOpen}
          onRequestHide={this.hideModal}
          className="modal_employee"
        >
          <ModalHeader>
            <ModalClose onClick={this.hideModal} />
            <ModalTitle>
              {!this.state.userdatas
                ? 'Waiting'
                : this.state.userdatas[0].user +
                  ' : ' +
                  this.state.userdatas[0].position}
            </ModalTitle>
          </ModalHeader>
          <ModalBody>
            {!this.state.userdatas ? loadingData() : createUserData()}
          </ModalBody>
        </Modal>
        <style jsx>
          {`
            .main table {
                width: 100%;
            }

            .main thead, .main tbody, .main tr, .main td, .main th { display: block; }

            .main tr:after {
                content: ' ';
                display: block;
                visibility: hidden;
                clear: both;
            }

            .main thead th {
                height: 50px;
            }

            .main tbody {
                height: 500px;
                overflow-y: auto;
            }

            .main tbody td, .main thead th {
                width: 20%;
                float: left;
            }
          `}
        </style>
      </div>
    );
  }
}
export default Table;
