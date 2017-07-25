import React, { Component } from "react";
import axios from "axios";
import _ from "lodash";
import moment from "moment";
import Search from "./Search";
import Filter from "./Filter";
import Timeline from "react-calendar-timeline/lib";
import { Link } from "react-router";
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
} from "reactstrap";
import classnames from "classnames";
import "../styles/Style.css";
const BASE_URL = "http://52.77.234.30";
const DAY_FORMAT = "YYYY-MM-DD";
class PresentAbsent extends Component {
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
      activeTab: "1"
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
        user: _.filter(data, i => i.status !== "")
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
            i.status !== "Absent" &&
            i.status !== "Normal" &&
            i.status !== "Overwork" &&
            i.status !== "Underwork"
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
            i.status === "Absent" &&
            i.status !== "Normal" &&
            i.status !== "Overwork" &&
            i.status !== "Underwork"
        )
      });
    } else if (!type.absent && type.normal && type.overwork && type.underwork) {
      await this.setState({
        user: _.filter(data, i => i.status !== "Absent")
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
            i.status !== "Absent" &&
            i.status !== "Overwork" &&
            i.status !== "Underwork"
        )
      });
    } else if (type.absent && !type.normal && type.overwork && type.underwork) {
      await this.setState({
        user: _.filter(data, i => i.status !== "Normal")
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
            i.status !== "Absent" &&
            i.status !== "Normal" &&
            i.status !== "Underwork"
        )
      });
    } else if (type.absent && type.normal && !type.overwork && type.underwork) {
      await this.setState({
        user: _.filter(data, i => i.status !== "Overwork")
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
            i.status !== "Absent" &&
            i.status !== "Normal" &&
            i.status !== "Overwork"
        )
      });
    } else if (type.absent && type.normal && type.overwork && !type.underwork) {
      await this.setState({
        user: _.filter(data, i => i.status !== "Underwork")
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
          i => i.status !== "Overwork" && i.status !== "Underwork"
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
          i => i.status !== "Absent" && i.status !== "Normal"
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
          i => i.status !== "Normal" && i.status !== "Underwork"
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
          i => i.status !== "Absent" && i.status !== "Overwork"
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
          i => i.status !== "Normal" && i.status !== "Overwork"
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
          i => i.status !== "Absent" && i.status !== "Underwork"
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
    } catch (err) {
      this.setState({ failed: true });
    }
  }

  async handleFromTo() {
    console.log(this.refs.from.value);
    console.log(this.refs.to.value);
    const from = this.refs.from.value;
    const to = this.refs.to.value;
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

  handleFrom(e) {
    const from = e.target.value;
    this.setState({
      from: from
    });
  }

  handleTo(e) {
    const to = e.target.value;
    this.setState({
      to: to
    });
  }

  async handleSort(type) {
    let userData = this.state.user;
    switch (type) {
      case "date": {
        if (this.state.dateAsc) {
          userData = await _.orderBy(userData, "date", "desc");
          this.setState({
            dateAsc: false
          });
        } else {
          userData = await _.orderBy(userData, "date", "asc");
          this.setState({
            dateAsc: true
          });
        }
        this.setState({
          user: userData
        });
        break;
      }
      case "name": {
        if (this.state.nameAsc) {
          userData = await _.orderBy(userData, "name", "desc");
          this.setState({
            nameAsc: false
          });
        } else {
          userData = await _.orderBy(userData, "name", "asc");
          this.setState({
            nameAsc: true
          });
        }
        this.setState({
          user: userData
        });
        break;
      }
      case "status": {
        if (this.state.statusAsc) {
          userData = await _.orderBy(userData, "status", "desc");
          this.setState({
            statusAsc: false
          });
        } else {
          userData = await _.orderBy(userData, "status", "asc");
          this.setState({
            statusAsc: true
          });
        }
        this.setState({
          user: userData
        });
        break;
      }
      case "in": {
        if (this.state.inAsc) {
          userData = await _.orderBy(userData, "in", "desc");
          this.setState({
            inAsc: false
          });
        } else {
          userData = await _.orderBy(userData, "in", "asc");
          this.setState({
            inAsc: true
          });
        }
        this.setState({
          user: userData
        });
        break;
      }
      case "out": {
        if (this.state.outAsc) {
          userData = await _.orderBy(userData, "out", "desc");
          this.setState({
            outAsc: false
          });
        } else {
          userData = await _.orderBy(userData, "out", "asc");
          this.setState({
            outAsc: true
          });
        }
        this.setState({
          user: userData
        });
        break;
      }
      case "total": {
        if (this.state.totalAsc) {
          userData = await _.orderBy(userData, "total", "desc");
          this.setState({
            totalAsc: false
          });
        } else {
          userData = await _.orderBy(userData, "total", "asc");
          this.setState({
            totalAsc: true
          });
        }
        this.setState({
          user: userData
        });
        break;
      }
    }
  }

  render() {
    const createData = data => {
      return _.map(data, (user, index) => {
        let style = "";
        if (user.status === "Absent") {
          style = "badge badge-pill badge-danger";
        } else if (user.status === "Overwork") {
          style = "badge badge-pill badge-info";
        } else if (user.status === "Normal") {
          style = "badge badge-pill badge-success";
        } else if (user.status === "Underwork") {
          style = "badge badge-pill badge-warning";
        }
        return (
          <tr>
            <td>
              ({moment(user.date).isoWeekday()}){moment(user.date).format("DD MMM YYYY")}
            </td>
            <td>
              {user.name}
            </td>
            <td>
              <span className={style}>
                {user.status}
              </span>
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
      });
    };

    const loadingData = () => {
      return (
        <div className="col align-self-center loading">
          <img src="./assets/img/loading.svg" alt="" width="50" />
        </div>
      );
    };
    const groups = [
      {
        id: 1,
        title: "group 1",
        rightTitle: "23(7)"
      },
      { id: 2, title: "group 2" }
    ];

    const items = [
      {
        id: 1,
        group: 1,
        title: "item 1",
        canMove: false,
        canResize: false,
        canChangeGroup: false,
        className: "eiei",
        start_time: moment("2017-07-01"),
        end_time: moment("2017-07-02")
      },
      {
        id: 2,
        group: 2,
        title: "item 2",
        start_time: moment().add(-0.5, "hour"),
        end_time: moment().add(0.5, "hour")
      },
      {
        id: 3,
        group: 1,
        title: "item 3",
        start_time: moment().add(2, "hour"),
        end_time: moment().add(3, "hour")
      }
    ];
    return (
      <div>
        <div className="row">
          <div className="col-md-12">
            <div className="pull-left">
              <Nav tabs>
                <NavItem>
                  <Link to="/presentabsent">
                    <NavLink className="active">Table</NavLink>
                  </Link>
                </NavItem>
                <NavItem>
                  <Link to="/presentabsent/grant">
                    <NavLink>Grant</NavLink>
                  </Link>
                </NavItem>
              </Nav>
            </div>
            <div className="pull-right">
              <Search onChange={query => this.handleSearch(query)} />
            </div>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-12">
            <div className="pull-left">
              <Filter onFilter={type => this.handleFilter(type)} />
            </div>
            {
              <div className="pull-right fromto-box">
                {!this.state.from ? "" : <span className="fromto">From </span>}
                {!this.state.from
                  ? ""
                  : <input
                      className="form-control fromto_input"
                      type="date"
                      ref="from"
                      value={moment(this.state.from).format(DAY_FORMAT)}
                      onChange={e => this.handleFrom(e)}
                    />}
                {!this.state.to ? "" : <span className="fromto">To </span>}
                {!this.state.to
                  ? ""
                  : <input
                      className="form-control fromto_input"
                      type="date"
                      ref="to"
                      value={
                        !this.state.to
                          ? "Waiting"
                          : moment(this.state.to).format(DAY_FORMAT)
                      }
                      onChange={e => this.handleTo(e)}
                    />}
                {!this.state.to && !this.state.from
                  ? ""
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
        <div className="row mt-3">
          <div className="col-md-12">
            {!this.state.user
              ? loadingData()
              : <table className="table">
                  <thead className="thead-inverse">
                    <tr>
                      <th onClick={() => this.handleSort("date")}>
                        Date{" "}
                        {this.state.dateAsc
                          ? <i
                              className="fa fa-sort-desc pull-right"
                              aria-hidden="true"
                            />
                          : <i
                              className="fa fa-sort-asc pull-right"
                              aria-hidden="true"
                            />}
                      </th>
                      <th onClick={() => this.handleSort("name")}>
                        Name{" "}
                        {this.state.nameAsc
                          ? <i
                              className="fa fa-sort-desc pull-right"
                              aria-hidden="true"
                            />
                          : <i
                              className="fa fa-sort-asc pull-right"
                              aria-hidden="true"
                            />}
                      </th>
                      <th onClick={() => this.handleSort("status")}>
                        Status{" "}
                        {this.state.statusAsc
                          ? <i
                              className="fa fa-sort-desc pull-right"
                              aria-hidden="true"
                            />
                          : <i
                              className="fa fa-sort-asc pull-right"
                              aria-hidden="true"
                            />}
                      </th>
                      <th onClick={() => this.handleSort("in")}>
                        In{" "}
                        {this.state.inAsc
                          ? <i
                              className="fa fa-sort-desc pull-right"
                              aria-hidden="true"
                            />
                          : <i
                              className="fa fa-sort-asc pull-right"
                              aria-hidden="true"
                            />}
                      </th>
                      <th onClick={() => this.handleSort("out")}>
                        Out{" "}
                        {this.state.outAsc
                          ? <i
                              className="fa fa-sort-desc pull-right"
                              aria-hidden="true"
                            />
                          : <i
                              className="fa fa-sort-asc pull-right"
                              aria-hidden="true"
                            />}
                      </th>
                      <th onClick={() => this.handleSort("total")}>
                        Total Hours{" "}
                        {this.state.totalAsc
                          ? <i
                              className="fa fa-sort-desc pull-right"
                              aria-hidden="true"
                            />
                          : <i
                              className="fa fa-sort-asc pull-right"
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
      </div>
    );
  }
}
export default PresentAbsent;
