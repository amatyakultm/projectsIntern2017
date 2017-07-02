import React, { Component } from 'react'
import Style from '../styles/Style.css'
class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-toggleable-md navbar-light nav-app">
        <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <a className="navbar-brand" href="#"><img src="http://www.thaitechno.net/uploadedimages/Logo_41551_506019304_fullsize.png" alt="" width="100px"/></a>

        <div className="collapse navbar-collapse nav-menu" id="navbarTogglerDemo02">

        </div>
      </nav>
    )
  }
}
export default Navbar;
