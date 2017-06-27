import React from 'react'
import { Modal, Glyphicon } from 'react-bootstrap'
import './sideBar.css'

class Sidebar extends React.Component {
render() {
    console.log('this prop = '+this.props.children);
    return (
        <Modal 
            className='Sidebar left'
            show={ this.props.isVisible }
            onHide={ this.props.onHide } 
            >
            <Modal.Header className='header'>
                <Modal.Title className='hamburger'>
                    <div className='icon' onClick={this.props.onHide}><Glyphicon glyph="menu-hamburger" /></div>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                { this.props.children }
            </Modal.Body>
        </Modal>
    );
  }
}

export default Sidebar