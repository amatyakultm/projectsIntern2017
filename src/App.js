import React, { Component } from 'react';
import { Nav, NavItem } from 'react-bootstrap'

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
        
        <Sidebar side='left' isVisible={ this.state.open } onHide={ () => this.handleOpenSidebar(false) }>
        	<Nav>
          	<NavItem href='#'>Item 1</NavItem>
            <NavItem href='#'>Item 2</NavItem>
            <NavItem href='#'>Item 3</NavItem>
            <NavItem href='#'>Item 4</NavItem>
            <NavItem href='#'>Item 5</NavItem>
          </Nav>
        </Sidebar>
      </div>
    );
  }
}

export default App;
