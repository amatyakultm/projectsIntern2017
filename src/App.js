import React, { Component } from 'react';
<<<<<<< Updated upstream
import logo from './logo.svg';
=======
import axios from 'axios'
import _ from 'lodash'
>>>>>>> Stashed changes
import './App.css';
import Modal from './Modal';
import { Button } from 'react-bootstrap';
import dataUsr from './dataUser.json';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userPopUp: '',
      projectPopUp: '',
      failedPopUp: false,



    };
  }
  clickShowPopup = (event) => {
    event.preventDefault();

    this.getUsers()

  }
  getUsers = () => {

    this.setState({
      userPopUp: dataUsr

    })
    // console.log(this.state.users)


    /*axios.get('http://localhost:3000/home/ubuntu-benz/Desktop/projectsIntern2017/src/dataUser.json')
      .then(response => {
        this.setState({
          users: response.data.users
        })
      })
      .catch(err => {
        this.setState({
          failed: true
        })
      })*/
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
<<<<<<< Updated upstream
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
=======
        <h2>Welcome to React</h2>
        <hr />
        <h4>list User Data</h4>
        <br />
        <div>
          {!this.state.users ? 'Loading..' : userData}
        </div>
>>>>>>> Stashed changes
      </div>
    );
  }
}

export default App;
*/