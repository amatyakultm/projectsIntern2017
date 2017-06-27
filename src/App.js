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

      projectPopUp: '',
      failedPopUp: false,



    };
  }
  clickShowPopup = (event) => {
    event.preventDefault();

    this.getUsers()
    console.log(this.state.userPopUp)


  }
  getUsers = () => {

    /*this.setState({
      userPopUp: dataUsr

    })*/
    // console.log(this.state.users)


    axios.get('https://5971d513.ngrok.io/projects/31776670/user/2723382')
      .then(response => {
        this.setState({
          userPopUp: response.data
        })
      })
      .catch(err => {
        this.setState({
          failed: true
        })
      })
  }


  render() {

    if (this.state.failedPopUp) return <h3>Get User Failed.</h3>

    return (
      <div className="App">
        <input onClick={this.clickShowPopup} type="button" className="btn btn-info btn-lg" data-toggle="modal" data-target="#myModal" value="ada" />
        <Modal userPopUp={this.state.userPopUp} />



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