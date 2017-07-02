import React, { Component } from 'react';
import { defaults, Pie } from 'react-chartjs-2';
import axios from 'axios';
import _ from 'lodash';
import ReactLoading from 'react-loading';
import Style from '../styles/Style.css';
import Modal from '../Modal';
import '../css/Modal.css';
import '../css/labelPopup.css';


class TableData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      failed: false,
      projects: [],
      failedPopUp: false,
      namePopup: '',
      valuePopup: '',
      checkPopup: 1,
      idPopup: 0
    };
    console.log(this.props);
  }
  clickShowPopup = (id, name, position) => {
    this.setState({
      namePopup: name,
      idPopup: id
    })

    this.setState({
      userPopUp: null
    })
    this.getUsersPopup()


  }
  getUsersPopup = () => {
    console.log("sdsd")
    axios.get(`http://52.77.234.30/projects/${this.props.projectid}/user/${this.state.idPopup}?start=2017-06-01&end=2017-06-30`)
      .then(response => {
        this.setState({
          userPopUp: response.data
        })

      })
      .catch(err => {
        this.setState({
          failedPopUp: true
        })
      })


    console.log(this.state.userPopUp)

  }
  onChangeInputSearch = (event) => {
    event.preventDefault();


    let query = event.target.value.toLowerCase()
    let a = []
    let i = 0//num loop of a[] 

    console.log(this.state.userPopUp.userdata)



    let test = this.state.userPopUp.userdata.filter((item) => (item.description.toLowerCase().indexOf(query)) !== -1)
    if (test.length > 0) {
      let tests = test.map((test, index) => <tr><td>{test.date}</td><td>{test.description}</td><td>{test.total_hour}</td></tr>)

      this.setState({
        valuePopup: tests

      })
      console.log(this.state.valuePopup)
    } else {
      let test = this.state.userPopUp.userdata.filter((item) => (item.date.indexOf(query)) !== -1)
      let tests = test.map((test, index) => <tr><td>{test.date}</td><td>{test.description}</td><td>{test.total_hour}</td></tr>)

      this.setState({
        valuePopup: tests

      })
      console.log(this.state.valuePopup)
    }
    test = this.state.userPopUp.userdata.filter((item) => (item.description.toLowerCase().indexOf(query)) !== -1)
    if (test.length <= 0) {
      test = this.state.userPopUp.userdata.filter((item) => (item.date.toLowerCase().indexOf(query)) !== -1)
    }
    if (test.length <= 0) {
      let test = this.state.userPopUp.userdata.filter((item) => (item.total_hour.indexOf(query)) !== -1)
      let tests = test.map((test, index) => <tr><td>{test.date}</td><td>{test.description}</td><td>{test.total_hour}</td></tr>)

      this.setState({
        valuePopup: tests

      })


    }

    this.setState({
      checkPopup: 2
    })





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
    if (this.state.userPopUp != null && this.state.checkPopup == 1) {
      this.state.valuePopup = this.state.userPopUp.userdata.map((userPopUp, index) => <tr> <td>{userPopUp.date}</td><td>{userPopUp.description}</td><td>{userPopUp.total_hour}</td> </tr>)

    }
    return (
      <div>
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
                    <tr key={index + index2} onClick={() => this.clickShowPopup(user.id, user.name)} data-toggle="modal" data-target="#myModal">

                      <td> <label onclick={() => this.clickShowPopup(user.id, user.name, position.position)} value="detail" htmlFor="modal-1" className="btnFor"  >{position.position}</label></td>
                      <td><label onclick={() => this.clickShowPopup(user.id, user.name, position.position)} value="detail" htmlFor="modal-1" className="btnFor"  >{user.name}</label></td>
                      <td><label onclick={() => this.clickShowPopup(user.id, user.name, position.position)} value="detail" htmlFor="modal-1" className="btnFor"  >{parseInt(user.total_hour / 1000 / 60 / 60)}</label></td>
                      <td><label onclick={() => this.clickShowPopup(user.id, user.name, position.position)} value="detail" htmlFor="modal-1" className="btnFor"  >{user.manday}</label></td>Y
                      <td> <label onclick={() => this.clickShowPopup(user.id, user.name)} value="detail" htmlFor="modal-1" className="label_detail "  >ดูรายละเอียด</label>

                      </td>
                    </tr>
                  )
                })
                return eiei
              })
              }
            </tbody>
          </table>



        </div>
        <input className="modal2-state" id="modal-1" type="checkbox" />
        <Modal checkPopup={this.state.checkPopup} valuePopup={this.state.valuePopup} namePopup={this.state.namePopup} vauleColumnHead={['Date', 'Task', 'Workour']} userPopUp={this.state.userPopUp} onChangeInputSearch={this.onChangeInputSearch} />
      </div>
    );
  }
}
export default TableData;
