import React from 'react'
import { Button, Navbar, Glyphicon, ButtonToolbar, ButtonGroup } from 'react-bootstrap';
import './navBar.css'
//import Navbar from 'react-sidebar'
        // <div>
        // <button type="button" class="btn btn-default" aria-label="Menu Hamburger">
        //     <span class="glyphicon glyphicon-menu-hamburger" aria-hidden="true"></span>
        // </button>
        // </div>

                    // <Button bsStyle='primary'>eieiei</Button>

const Heading = (props) => {
    //console.log(Navbar);
    // console.log(this.props);
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