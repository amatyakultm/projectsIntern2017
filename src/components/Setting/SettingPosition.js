import React, { Component } from "react";
import axios from "axios";
import _ from "lodash";
import moment from "moment";
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
import "../../styles/Style.css";
const BASE_URL = "http://54.254.251.53";
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

  async handleChangePosition(userId, e) {
    const val = e.target.value;
    if (_.isEmpty(this.state.newPosition)) {
      await this.setState({
        newPosition: [
          {
            user_id: userId,
            position: val
          }
        ]
      });
    } else {
      const isExistsUser = await _.find(
        this.state.newPosition,
        item => item.user_id === userId
      );
      if (isExistsUser) {
        isExistsUser.position = val;
      } else {
        const data = await [
          ...this.state.newPosition,
          { user_id: userId, position: val }
        ];
        await this.setState({
          newPosition: data
        });
      }
    }
  }

  saveData = async () => {
    const { data } = await axios.post(`${BASE_URL}/updatePosition`, {
      data: this.state.newPosition
    });
    if (data) {
      alert("Save Done!");
    }
  };

  render() {
    const loadingData = () => {
      return (
        <div className="col align-self-center loading">
          <img src="/assets/img/loading.svg" alt="" width="50" />
        </div>
      );
    };

    const createData = _.map(this.state.users, user => {
      const userId = user.id;
      return (
        <tr>
          <td>
            {user.name}
          </td>
          <td>
            <select
              className="form-control"
              onChange={e => this.handleChangePosition(userId, e)}
            >
              {_.map(this.state.positions, position => {
                return (
                  <option
                    selected={user.position_id === position.id ? true : false}
                    value={position.id}
                  >
                    {position.name}
                  </option>
                );
              })}
            </select>
          </td>
        </tr>
      );
    });

    return (
      <div>
        <div className="row">
          <div className="col-md-12">
            <div className="pull-left">
              <Nav tabs className="navtabs">
                <NavItem>
                  <Link to="/setting/position">
                    <NavLink className="active modeL">Update Position</NavLink>
                  </Link>
                </NavItem>
                <NavItem>
                  <Link to="/setting/addposition">
                    <NavLink className="modeR">Add Position</NavLink>
                  </Link>
                </NavItem>
              </Nav>
            </div>
            <div className="pull-right" />
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-md-12">
            <table className="table">
              <thead className="thead-inverse">
                <tr>
                  <th>Name</th>
                  <th>Position</th>
                </tr>
              </thead>
              <tbody>
                {!this.state.users ? loadingData() : createData}
              </tbody>
            </table>
            <div className="col-md-12 text-center">
              {this.state.newPosition
                ? <button className="btn btn-success" onClick={this.saveData}>
                    Save
                  </button>
                : ""}
            </div>
          </div>
        </div>
        <style jsx>
          {`
            table {
              width: 100%;
            }

            thead,
            tbody,
            tr,
            td,
            th {
              display: block;
            }

            tr:after {
              content: ' ';
              display: block;
              visibility: hidden;
              clear: both;
            }

            thead th {
              height: 50px;
            }

            tbody {
              height: 500px;
              overflow-y: auto;
            }

            tbody td,
            thead th {
              width: 50%;
              float: left;
            }
            .modeL {
              border-bottom-left-radius: 30px !important;
              border-top-left-radius: 30px !important;
              border-top-right-radius: 0px !important;
              height: 40px;
              background-color: #ffffff;
            }

            .modeR {
              border-bottom-right-radius: 30px !important;
              border-top-right-radius: 30px !important;
              border-top-left-radius: 0px !important;
              height: 40px;
              background-color: #ffffff;
            }

            .navtabs {
              border-bottom-style: none !important;
            }
          `}
        </style>
      </div>
    );
  }
}
export default SettingPosition;
