import React from 'react'
import { Button, Navbar, Glyphicon, ButtonToolbar, ButtonGroup } from 'react-bootstrap';
import './navBar.css'

const Heading = (props) => {
    return(
        <div className = 'Bar'>
            <Navbar>
                <Navbar.Header>
                    <ButtonToolbar>
                        <ButtonGroup>
                            <Button onClick={()=>props.handleOpenSidebar(true)}><Glyphicon glyph="menu-hamburger" /></Button>
                        </ButtonGroup>
                    </ButtonToolbar>
                </Navbar.Header>
            </Navbar>   
        </div>
    )
}

export default Heading