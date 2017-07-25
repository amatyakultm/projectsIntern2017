import React, { Component } from 'react';
import Style from '../styles/Style.css';
import { Link } from 'react-router';
class Navbar extends Component {
  constructor(props) {
    super(props);
    console.log(props);
  }

  className() {
    const pathname = this.props.path;
    let classname = '';
    if (pathname === '/projects') {
      classname = 'nav-item active';
    } else if (pathname === '/presentabsent') {
      classname = 'nav-item active';
    } else if (pathname === '/employee') {
      classname = 'nav-item active';
    } else {
      classname = 'nav-item';
    }

    return classname;
  }
  render() {
    return (
      <nav className="navbar navbar-toggleable-md navbar-light nav-app">
        <button
          className="navbar-toggler navbar-toggler-right"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <a className="navbar-brand" href="#">
          <img src="/assets/img/appman-logo.png" alt="" width="100px" />
        </a>

        <div
          className="collapse navbar-collapse nav-menu"
          id="navbarTogglerDemo02"
        >
          <ul className="navbar-nav mr-auto mt-2 mt-md-0">
            <li
              className={
                this.props.path === '/projects' ? 'nav-item active' : 'nav-item'
              }
            >
              <a className="nav-link" href="/projects">
                <i className="fa fa-pie-chart" /> Projects
              </a>
            </li>
            <li
              className={
                this.props.path === '/presentabsent' ||
                this.props.path === '/presentabsent/grant'
                  ? 'nav-item active'
                  : 'nav-item'
              }
            >
              <a className="nav-link" href="/presentabsent">
                <i className="fa fa-briefcase" /> Present/Absent
              </a>
            </li>
            <li
              className={
                this.props.path === '/employee' ? 'nav-item active' : 'nav-item'
              }
            >
              <a className="nav-link" href="/employee">
                <i className="zmdi zmdi-male-female" /> Employee View
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
export default Navbar;
