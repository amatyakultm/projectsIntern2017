import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Style from './styles/Style.css';
import ProjectChart from './components/ProjectChart';
import Home from './components/Home';

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="container app-content">
          {this.props.children}
        </div>
      </div>
    );
  }
}
export default App;
