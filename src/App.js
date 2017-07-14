import React, { Component } from 'react';
import _ from 'lodash';
import Nav from 'react-bootstrap/lib/Nav';
import { browserHistory } from 'react-router';
import Sidebar from './components/Layout/sideBar';
import Navbar from './components/Layout/navBar';
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
      { name: 'Project Overview', path: '/projects' }
    ];
    return navMapping.map(({ name, path }) => {
      return (
        <Nav onClick={() => this.changeURL(path)}>
          {name}
        </Nav>
      );
    });
  }

  render() {
    const pathname = _.get(this.props, 'location.pathname');
    return (
      <div className="App">
        <Navbar
          handleOpenSidebar={() => this.handleOpenSidebar(true)}
          location={pathname}
        />
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
