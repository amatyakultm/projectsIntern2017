import React, { Component } from 'react'
import Style from '../styles/Style.css'
import { Link } from 'react-router'
class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-toggleable-md navbar-light nav-app">
        <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <a className="navbar-brand" href="#"><img src="./assets/img/appman-logo.png" alt="" width="100px" /></a>

        <div className="collapse navbar-collapse nav-menu" id="navbarTogglerDemo02">
          <ul className="navbar-nav mr-auto mt-2 mt-md-0">
            <li className="nav-item">
              <a className="nav-link" href="#"><i className="zmdi zmdi-view-dashboard"></i> Dashboard</a>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="/projects"><i className="zmdi zmdi-globe"></i> Projects</a>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}
export default Navbar;
