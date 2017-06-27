import React, { Component } from 'react';
import { Nav } from 'react-bootstrap'
import Breadcrumb from './/component/breadcrumb'
import Sidebar from './component/sideBar'
import Heading from './component/navBar'
import './App.css';

class App extends Component {
  state = {
    open: false
  }

  handleOpenSidebar(open) {
    console.log('---',open);
    this.setState({ open })
  }

  render() {
    return (
      <div className="App">
        <Heading handleOpenSidebar={()=>this.handleOpenSidebar(true)}/>
        
        <Sidebar side='left' isVisible={ this.state.open } onHide={ () => this.handleOpenSidebar(false)}>
        	<ul className = 'ul'>
            <Nav>Home</Nav>
            <Nav>Present/Absent</Nav>
            <Nav>project Overview</Nav>
            <Nav>Employee View</Nav>
          </ul>
        </Sidebar>
        <Breadcrumb/>
      </div>
    );
  }
}

export default App;
