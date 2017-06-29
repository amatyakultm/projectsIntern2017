import React from 'react'
import { Button, Navbar, Glyphicon } from 'react-bootstrap';
import './navBar.css'

const navBar = (props) => {
  return (
    <div className = 'Bar'>
      <Navbar>
        <Navbar.Header width='100%'>
          <div>
            <Button onClick={()=>props.handleOpenSidebar(true)}><Glyphicon glyph="menu-hamburger" /></Button>
          </div>
        </Navbar.Header>
      </Navbar>
    </div>
  )
}

export default navBar
