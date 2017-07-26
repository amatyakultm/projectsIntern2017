import React, { Component } from "react";
import axios from "axios";
import _ from "lodash";
import moment from "moment";
import "../../styles/Style.css";
const BASE_URL = "http://52.77.234.30";
class SettingPosition extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: undefined,
      user: undefined,
      failed: false,
      loading: false
    };
  }

  // async componentDidMount() {
  //   try {
  //     const { data } = await axios.get(`${BASE_URL}/users`);
  //     const { data: positionData } = await axios.get(`${BASE_URL}/positions`);
  //     this.setState({
  //       users: data.users,
  //       user: data.users,
  //       positions: positionData.positions
  //     });
  //     console.log(this.state);
  //   } catch (err) {
  //     this.setState({ failed: true });
  //   }
  // }
    updateData = async (day) => {
      await this.setState({
        loading: true
      })
      const start = moment().subtract(day, 'days').format('YYYY-MM-DD')
      const end = moment().format('YYYY-MM-DD')
      const { data } = await axios.get(`${BASE_URL}/getEntry?start=${start}&end=${end}`)
      console.log(data)
      await this.setState({
        loading: false,
        msg: 'Done!'
      })
    }

  render() {
    const loadingData = () => {
      return (
        <div className="col align-self-center loading">
          <img src="/assets/img/loading.svg" alt="" width="50" />
        </div>
      );
    }

    const msgData = () => {
      return (
        <div className="col align-self-center loading">
          <p className="text-success">{this.state.msg}</p>
        </div>
      );
    }

    return (
      <div>
        <div className="row">
          <div className="col-md-12">
            <h3>Update Data</h3>
            <button className="btn btn-danger" onClick={() => this.updateData(7)}>Last 7 Days</button>
            <button className="btn btn-danger" onClick={() => this.updateData(30)}>Last 30 Days</button>
            <button className="btn btn-danger" onClick={() => this.updateData(60)}>Last 60 Days</button>
          </div>
          <div className="col-md-12">
            {this.state.loading ? loadingData() : msgData()}
          </div>
        </div>
        <style jsx>
          {
            `
              button{
                cursor: pointer;
                margin-right: 20px;
              }
            `
          }
        </style>
      </div>
    );
  }
}
export default SettingPosition;
