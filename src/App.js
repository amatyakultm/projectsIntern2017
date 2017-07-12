import React, { Component } from 'react'
import Navbar from './components/Navbar'
import Style from './styles/Style.css'
import ProjectChart from './components/ProjectChart'
import Home from './components/Home'
const App = (props) => {
  return (
    <div className="App">
      <Navbar />
      <div className="container app-content">
        { props.children }
      </div>
    </div>
  );
}
export default App;