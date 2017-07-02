import React, { Component } from 'react';
import _ from 'lodash';

import Nav from 'react-bootstrap/lib/Nav';
import { Link, browserHistory } from 'react-router';
import Breadcrumb from './components/breadcrumb';
import Sidebar from './components/sideBar';
import Navbar from './components/navBar';
//import ProjectChart from './components/ProjectChart'
import './styles/Style.css';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }

  handleOpenSidebar(open) {
    this.setState({ open });
  }

  changeURL(url) {
    browserHistory.push(url);
    this.setState({ open: false });
  }

  renderNav() {
    const navMapping = [
      { name: 'home', path: '/' },
      { name: 'Present/Absent', path: '/present_absent' },
      { name: 'Project Overview', path: 'projects' }
    ];
    return navMapping.map(({ name, path }) => {
      return (
        <Nav onClick={() => this.changeURL(path)}>
          {name}
        </Nav>
      );
    });
  }

  // /present_absent
  render() {
    const pathname = _.get(this.props, 'location.pathname');
    return (
      <div className="App">
        <Navbar handleOpenSidebar={() => this.handleOpenSidebar(true)} />
        <Breadcrumb location={pathname} />
        <Sidebar
          side="left"
          isVisible={this.state.open}
          onHide={() => this.handleOpenSidebar(false)}
        >
          <ul className="ul">
            {this.renderNav()}
          </ul>
        </Sidebar>
        <div className="container app-content">
          {this.props.children}
        </div>
      </div>
    );
  }
}
export default App;
