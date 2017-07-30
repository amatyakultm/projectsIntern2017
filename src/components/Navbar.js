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
          <ul className="navbar-nav mr-auto mt-2 mt-md-0 pull-left">
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
          <ul className="navbar-nav pull-right">
            <li
              className={
                this.props.path === '/projects' ? 'nav-item active' : 'nav-item'
              }
            >
              <div className="dropdown">
                <a
                  className="nav-link"
                  id="dropdownMenuButton"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <i className="fa fa-cog" aria-hidden="true" /> Setting
                </a>
                <div
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuButton"
                >
                  <label for="checkbox-1" className="checkbox-custom-label">
                    <a href="/setting/position">Update Position</a>
                  </label>
                  <label for="checkbox-1" className="checkbox-custom-label">
                    <a href="/setting/data">Update Data</a>
                  </label>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <style jsx>
          {`
            .dropdown-menu {
              right: 0;
              left: inherit;
            }
            .dropdown-menu a {
              text-decoration: none;
              color: #2e4053;
            }
            .dropdown-menu a:hover {
              color: #dc3833;
            }
            a.nav-link {
              cursor: pointer;
            }
          `}
        </style>
      </nav>
    );
  }
}
export default Navbar;
