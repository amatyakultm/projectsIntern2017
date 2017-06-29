import React, { Component } from 'react';

import axios from 'axios'
import _ from 'lodash'

import './App.css';
import Modal from './Modal';
import { Button } from 'react-bootstrap';
import dataUsr from './dataUser.json';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      failedPopUp: false,
      namePopup: '',
      valuePopup: '',
      checkPopup: 1
    };
  }
  clickShowPopup = (event) => {
    event.preventDefault();
    this.setState({
      namePopup: event.target.value
    })
    console.log(event.target.value)
    this.getUsersPopup()
  }
  getUsersPopup = () => {
    axios.get('http://52.77.234.30/projects/31776670/user/2723382')
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
    /* if (this.state.userPopUp != null && this.state.checkPopup == 1) {
 
       this.setState({
         valuePopup: this.state.userPopUp.userdata.map((userPopUp, index) => <tr> <td></td><td></td><td></td> </tr>)
       })
     }*/



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


  render() {
    if (this.state.userPopUp != null && this.state.checkPopup == 1) {
      this.state.valuePopup = this.state.userPopUp.userdata.map((userPopUp, index) => <tr> <td>{userPopUp.date}</td><td>{userPopUp.description}</td><td>{userPopUp.total_hour}</td> </tr>)

    }

    /* if (this.state.failedPopUp) return <h3>Get User Failed.</h3>*/


    return (
      <div className="App">
        <input onClick={this.clickShowPopup} type="button" className="btn btn-info btn-lg" data-toggle="modal" data-target="#myModal" value="ada" />
        <Modal checkPopup={this.state.checkPopup} valuePopup={this.state.valuePopup} onChangeInputSearch={this.onChangeInputSearch} namePopup={this.state.namePopup} vauleColumnHead={['Date', 'Task', 'Workour']} userPopUp={this.state.userPopUp} />




      </div>

    );
  }
}

export default App;
/*
import React, { Component } from 'react';
import axios from 'axios'
import _ from 'lodash'
import './App.css';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      failed: false
    }
  }

  getUsers = () => {
    axios.get('https://8efa9ba5.ngrok.io/users')
      .then(response => {
        this.setState({
          users: response.data.users
        })
      })
      .catch(err => {
        this.setState({
          failed: true
        })
      })
  }
  componentDidMount() {
    this.getUsers()
  }
  render() {
    var userData = _.map(this.state.users, (user, index) => {
      return <p key={`user-${index}`}>{user.id}</p>
    })
    if (this.state.failed) return <h3>Get User Failed.</h3>
    return (
      <div className="App">

        <h2>Welcome to React</h2>
        <hr />
        <h4>list User Data</h4>
        <br />
        <div>
          {!this.state.users ? 'Loading..' : userData}
        </div>

      </div>
    );
  }
}

export default App;
*/