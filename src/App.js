import React, { Component } from 'react'
import Navbar from './components/Navbar'
import Style from './styles/Style.css'
import ProjectChart from './components/ProjectChart'
import Home from './components/Home'
class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      failed: false,
      data: []
    }
  }
  render() {
    return (
      <div className="App">
        <Navbar></Navbar>
        <div className="container app-content">
          {/*{}*/}
          <ProjectChart></ProjectChart>
          {/*{}*/}
        </div>
      </div>
    );
  }
}
export default App;
