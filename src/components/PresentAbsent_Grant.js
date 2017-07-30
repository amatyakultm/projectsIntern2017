import React, { Component } from 'react';
import axios from 'axios';
import _ from 'lodash';
import moment from 'moment';
import Search from './Search';
import Filter from './Filter';
import Mapping from './Mapping';
import Timeline from 'react-calendar-timeline/lib';
import scrollBar from '../styles/ScrollBar.css';
import { Link } from 'react-router';
import {
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Card,
  Button,
  CardTitle,
  CardText,
  Row,
  Col
} from 'reactstrap';
import classnames from 'classnames';
import '../styles/Style.css';
const BASE_URL = 'http://54.254.251.53';
const DAY_FORMAT = 'YYYY-MM-DD';
class PresentAbsentGrant extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      users: undefined,
      user: undefined,
      failed: false,
      query: undefined,
      dateAsc: true,
      nameAsc: true,
      statusAsc: true,
      inAsc: true,
      outAsc: true,
      totalAsc: true,
      activeTab: '1'
    };
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }

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

  async handleFilter(type) {
    let data;
    if (!this.state.tmpUser) {
      data = this.state.users;
    } else {
      data = this.state.tmpUser;
    }
    console.log(data);
    if (type.absent && type.normal && type.overwork && type.underwork) {
      await this.setState({
        user: _.filter(data, i => i.status !== '')
      });
    } else if (
      !type.absent &&
      !type.normal &&
      !type.overwork &&
      !type.underwork
    ) {
      await this.setState({
        user: _.filter(
          data,
          i =>
            i.status !== 'Absent' &&
            i.status !== 'Normal' &&
            i.status !== 'Overwork' &&
            i.status !== 'Underwork'
        )
      });
    } else if (
      type.absent &&
      !type.normal &&
      !type.overwork &&
      !type.underwork
    ) {
      await this.setState({
        user: _.filter(
          data,
          i =>
            i.status === 'Absent' &&
            i.status !== 'Normal' &&
            i.status !== 'Overwork' &&
            i.status !== 'Underwork'
        )
      });
    } else if (!type.absent && type.normal && type.overwork && type.underwork) {
      await this.setState({
        user: _.filter(data, i => i.status !== 'Absent')
      });
    } else if (
      !type.absent &&
      type.normal &&
      !type.overwork &&
      !type.underwork
    ) {
      await this.setState({
        user: _.filter(
          data,
          i =>
            i.status !== 'Absent' &&
            i.status !== 'Overwork' &&
            i.status !== 'Underwork'
        )
      });
    } else if (type.absent && !type.normal && type.overwork && type.underwork) {
      await this.setState({
        user: _.filter(data, i => i.status !== 'Normal')
      });
    } else if (
      !type.absent &&
      !type.normal &&
      type.overwork &&
      !type.underwork
    ) {
      await this.setState({
        user: _.filter(
          data,
          i =>
            i.status !== 'Absent' &&
            i.status !== 'Normal' &&
            i.status !== 'Underwork'
        )
      });
    } else if (type.absent && type.normal && !type.overwork && type.underwork) {
      await this.setState({
        user: _.filter(data, i => i.status !== 'Overwork')
      });
    } else if (
      !type.absent &&
      !type.normal &&
      !type.overwork &&
      type.underwork
    ) {
      await this.setState({
        user: _.filter(
          data,
          i =>
            i.status !== 'Absent' &&
            i.status !== 'Normal' &&
            i.status !== 'Overwork'
        )
      });
    } else if (type.absent && type.normal && type.overwork && !type.underwork) {
      await this.setState({
        user: _.filter(data, i => i.status !== 'Underwork')
      });
    } else if (
      type.absent &&
      type.normal &&
      !type.overwork &&
      !type.underwork
    ) {
      await this.setState({
        user: _.filter(
          data,
          i => i.status !== 'Overwork' && i.status !== 'Underwork'
        )
      });
    } else if (
      !type.absent &&
      !type.normal &&
      type.overwork &&
      type.underwork
    ) {
      await this.setState({
        user: _.filter(
          data,
          i => i.status !== 'Absent' && i.status !== 'Normal'
        )
      });
    } else if (
      type.absent &&
      !type.normal &&
      type.overwork &&
      !type.underwork
    ) {
      await this.setState({
        user: _.filter(
          data,
          i => i.status !== 'Normal' && i.status !== 'Underwork'
        )
      });
    } else if (
      !type.absent &&
      type.normal &&
      !type.overwork &&
      type.underwork
    ) {
      await this.setState({
        user: _.filter(
          data,
          i => i.status !== 'Absent' && i.status !== 'Overwork'
        )
      });
    } else if (
      type.absent &&
      !type.normal &&
      !type.overwork &&
      type.underwork
    ) {
      await this.setState({
        user: _.filter(
          data,
          i => i.status !== 'Normal' && i.status !== 'Overwork'
        )
      });
    } else if (
      !type.absent &&
      type.normal &&
      type.overwork &&
      !type.underwork
    ) {
      await this.setState({
        user: _.filter(
          data,
          i => i.status !== 'Absent' && i.status !== 'Underwork'
        )
      });
    }
  }

  async componentDidMount() {
    try {
      const result = [];
      const { data } = await axios.get(`${BASE_URL}/presentabsent`);
      await _.map(data.present_absent, item => {
        _.map(item.users, user => {
          result.push(user);
        });
      });
      this.setState({
        users: result,
        user: result,
        from: data.start,
        to: data.end
      });
      console.log(result);
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
      const result = [];
      const { data } = await axios.get(
        `${BASE_URL}/presentabsent?start=${from}&end=${to}`
      );
      await _.map(data.present_absent, item => {
        _.map(item.users, user => {
          result.push(user);
        });
      });
      this.setState({
        users: result,
        user: result,
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

  generateOption() {}

  render() {
    const loadingData = () => {
      return (
        <div className="col align-self-center loading">
          <img src="/assets/img/loading.svg" alt="" width="50" />
        </div>
      );
    };
    // const groups = [
    //   {
    //     id: 1,
    //     title: "group 1",
    //     rightTitle: "23(7)"
    //   },
    //   { id: 2, title: "group 2" }
    // ];

    // const items = [
    //   {
    //     id: 1,
    //     group: 1,
    //     title: "item 1",
    //     canMove: false,
    //     canResize: false,
    //     canChangeGroup: false,
    //     className: "eiei",
    //     start_time: moment("2017-07-01"),
    //     end_time: moment("2017-07-02")
    //   },
    //   {
    //     id: 2,
    //     group: 2,
    //     title: "item 2",
    //     start_time: moment().add(-0.5, "hour"),
    //     end_time: moment().add(0.5, "hour")
    //   },
    //   {
    //     id: 3,
    //     group: 1,
    //     title: "item 3",
    //     start_time: moment().add(2, "hour"),
    //     end_time: moment().add(3, "hour")
    //   }
    // ];
    let groups = [];
    const items = [];
    _.map(this.state.user, (item, index) => {
      const userCheck = _.find(groups, i => i.id === item.id);
      if (userCheck) {
        if (item.status === 'Absent') {
          userCheck.absent_count += 1;
        } else {
          userCheck.present_count += 1;
        }
      } else {
        if (item.status === 'Absent') {
          groups.push({
            id: item.id,
            title: item.name,
            absent_count: 1,
            present_count: 0
          });
        } else {
          groups.push({
            id: item.id,
            title: item.name,
            absent_count: 0,
            present_count: 1
          });
        }
      }
      items.push({
        id: index,
        group: item.id,
        title: ' ',
        className: `${item.status}`,
        start_time: moment(item.date),
        end_time: moment(item.date).add(1, 'days'),
        fixedHeader: 'sticky'
      });
    });
    // const newGroups = _.map(groups, item => {
    //   item.rightTitle = `${item.present_count} (${item.absent_count})`;
    // });
    _.map(groups, item => {
      item.rightTitle = (
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <div
            style={{
              width: '50%',
              border: '1px solid #ddd',
              textAlign: 'center'
            }}
          >
            {item.present_count}
          </div>
          <div
            style={{
              width: '50%',
              border: '1px solid #ddd',
              textAlign: 'center'
            }}
          >
            {item.absent_count}
          </div>
        </div>
      );
    });
    const data = [
      {
        id: 'Underwork',
        color: '#ec971f'
      },
      {
        id: 'Overwork',
        color: '#c9302c'
      },
      {
        id: 'Normal',
        color: '#449d44'
      },
      {
        id: 'Absent',
        color: '#787878'
      }
    ];
    return (
      <div>
        <div className="row">
          <div className="col-md-12">
            <div className="pull-left">
              <Nav tabs className="navtabs">
                <NavItem>
                  <Link to="/present_absent/table">
                    <NavLink className="modeL">Table</NavLink>
                  </Link>
                </NavItem>
                <NavItem>
                  <Link to="/present_absent/grant">
                    <NavLink className="active modeR">Grant</NavLink>
                  </Link>
                </NavItem>
              </Nav>
            </div>
            {
              <div className="pull-right fromto-box">
                {!this.state.from ? '' : <span className="fromto">From </span>}
                {!this.state.from
                  ? ''
                  : <input
                      className="form-control fromto_input"
                      type="date"
                      ref="from"
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
            }
          </div>
        </div>
        <div className="row mt-2">
          <div className="col-5 colorTab">
            <Mapping data={data} />
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-12">
            <div
              className="tableCalanDar"
              style={{
                overflowX: 'hidden',
                overflowY: 'scroll',
                minHeight: 400,
                maxHeight: 450,
                height: 'auto'
              }}
            >
              <Timeline
                groups={groups}
                items={items}
                defaultTimeStart={moment().add(-1, 'month')}
                defaultTimeEnd={moment()}
                visibleTimeStart={moment().add(-1, 'month')}
                minZoom={2592000000}
                fixedHeader="fixed"
                maxZoom={2592000000}
                sidebarContent="Name"
                rightSidebarWidth={150}
                rightSidebarContent={
                  <table>
                    <tr>
                      <td
                        style={{
                          height: '60px',
                          width: '100',
                          border: '1px solid #ddd',
                          textAlign: 'center',
                          backgroundColor: '#449d44'
                        }}
                      >
                        Present
                      </td>
                      <td
                        style={{
                          height: '60px',
                          width: '100',
                          border: '1px solid #ddd',
                          textAlign: 'center'
                        }}
                      >
                        Absent
                      </td>
                    </tr>
                  </table>
                }
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default PresentAbsentGrant;
