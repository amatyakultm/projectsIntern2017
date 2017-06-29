
import React, { Component } from 'react';
import { Nav } from 'react-bootstrap'
import { Link } from 'react-router'
import Breadcrumb from './/component/breadcrumb'
import Sidebar from './component/sideBar'
import Navbar from './component/navBar'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      open: false

    }
  }

  handleOpenSidebar(open) {
    console.log('---',open);
    this.setState({ open })
  }

  render() {
    return (
      <div className='App'>
        <Navbar handleOpenSidebar={()=>this.handleOpenSidebar(true)}/>
        <Sidebar side='left' isVisible={ this.state.open } onHide={ () => this.handleOpenSidebar(false)}>
          <ul className = 'ul'>
            <Nav><Link to={'/present_absent'}> Present_absent </Link> <br/></Nav>
            <Link to={'/projects'} > Project </Link>
            <Nav>Home</Nav>
            <Nav>Present/Absent</Nav>
            <Nav>project Overview</Nav>
            <Nav>Employee View</Nav>
          </ul>
        </Sidebar>
        <Breadcrumb/>
        <div className="container app-content">
          { this.props.children }    
        </div>
      </div>
    );
  }
}
export default App;
