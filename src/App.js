import React, { Component } from 'react'
import Navbar from './components/Navbar'
import Style from './styles/Style.css'
import ProjectChart from './components/ProjectChart'
import Home from './components/Home'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="container app-content">
          <ProjectChart />
        </div>
      </div>
    );
  }
}
export default App;
