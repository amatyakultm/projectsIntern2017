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
      const { data: positionData } = await axios.get(`${BASE_URL}/positions`);
      this.setState({
        position: positionData.positions,
        positions: positionData.positions
      });
      console.log(this.state.positions);
    } catch (err) {
      this.setState({ failed: true });
    }
  }

  handleChangePosition = e => {
    this.setState({
      new_position_name: e.target.value
    });
  };

  handleAddPosition = async () => {
    const { new_position_name: positionName } = this.state;
    const { data } = await axios.post(`${BASE_URL}/positions`, {
      position_name: positionName
    });
    if (data) {
      await alert("add new position done!");
      await this.componentDidMount();
      await this.setState({
        new_position_name: ""
      });
    } else {
      alert("add new position fail.");
    }
  };

  handleEditButton = async (position_id, position_name) => {
    if (_.isEqual(position_id, this.state.isEdit)) {
      this.setState({
        isEdit: undefined,
        current_position_edit: ""
      });
    } else {
      this.setState({
        isEdit: position_id,
        current_position_edit: position_name
      });
    }
  };

  handleEditPosition = async position_id => {
    const { current_position_edit: positionName } = this.state;
    const { data } = await axios.patch(`${BASE_URL}/positions`, {
      position_id: position_id,
      position_name: positionName
    });
    if (data) {
      await alert("edit position done!");
      await this.componentDidMount();
      await this.setState({
        isEdit: undefined,
        current_position_edit: ""
      });
    } else {
      alert("edit position fail.");
    }
  };

  handleEditPositionChange = e => {
    this.setState({
      current_position_edit: e.target.value
    });
    console.log(this.state.current_position_edit);
  };

  handleDeletePosition = async position_id => {
    const isConfirm = window.confirm("Are u sure?");
    if (!isConfirm) {
      return false;
    }
    const { data } = await axios.post(`${BASE_URL}/positions/delete`, {
      position_id: position_id
    });
    if (data) {
      await alert("delete position done!");
      await this.componentDidMount();
    } else {
      alert("delete position fail.");
    }
  };

  isEdit = id => {
    return this.state.isEdit === id;
  };

  render() {
    const loadingData = () => {
      return (
        <div className="col align-self-center loading">
          <img src="/assets/img/loading.svg" alt="" width="50" />
        </div>
      );
    };

    const createData = _.map(this.state.positions, position => {
      return (
        <tr>
          {this.isEdit(position.id)
            ? <td>
                <div style={{ display: "flex" }}>
                  <input
                    className="form-control"
                    style={{ marginRight: "15px" }}
                    type="text"
                    value={
                      !this.state.current_position_edit
                        ? position.name
                        : this.state.current_position_edit
                    }
                    onChange={this.handleEditPositionChange}
                  />
                  <button
                    className="btn btn-sm btn-success"
                    onClick={() => this.handleEditPosition(position.id)}
                  >
                    <i className="fa fa-check-circle-o" aria-hidden="true" />
                  </button>
                </div>
              </td>
            : <td>
                {position.name}
              </td>}
          <td className="action-group">
            <button
              className="btn btn-sm btn-warning"
              onClick={() => this.handleEditButton(position.id, position.name)}
            >
              <i className="fa fa-pencil-square-o" aria-hidden="true" />
            </button>
            <button
              className="btn btn-sm btn-danger"
              onClick={() => this.handleDeletePosition(position.id)}
            >
              <i className="fa fa-trash-o" aria-hidden="true" />
            </button>
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
                    <NavLink className="modeL">Update Position</NavLink>
                  </Link>
                </NavItem>
                <NavItem>
                  <Link to="/setting/addposition">
                    <NavLink className="active modeR">Add Position</NavLink>
                  </Link>
                </NavItem>
              </Nav>
            </div>
            <div className="pull-right" />
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-md-6">
            <table className="table">
              <thead className="thead-inverse">
                <tr>
                  <th>Position</th>
                  <th />
                </tr>
              </thead>
              <tbody>
                {!this.state.positions ? loadingData() : createData}
              </tbody>
            </table>
          </div>
          <div className="col-md-6">
            <div className="card">
              <div className="card-header">Add new Position</div>
              <div className="card-block">
                <input
                  className="form-control"
                  type="text"
                  placeholder="Position Name"
                  value={this.state.new_position_name}
                  onChange={this.handleChangePosition}
                />
                <br />
                <div className="text-center">
                  <button
                    className="btn btn-success"
                    onClick={this.handleAddPosition}
                  >
                    Add
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <style jsx>
          {`
            .card {
              background-color: transparent;
              border-width: 0;
            }
            .card-header {
              color: white;
              background-color: #d9534f;
            }
            button {
              cursor: pointer;
            }
            .action-group {
              text-align: right;
            }
            .action-group button:first-child {
              margin-right: 10px;
            }
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
              height: 400px;
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

            .modeL:hover {
              color: black;
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
