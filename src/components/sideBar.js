import React from 'react';
import { Modal, Glyphicon } from 'react-bootstrap';
import './sideBar.css';

const Sidebar = props => {
  return (
    <Modal
      className="Sidebar left"
      show={props.isVisible}
      onHide={props.onHide}
    >
      <Modal.Header className="header">
        <img className="logo" src="./Asset/PNG/Logo1.png" />
        <Modal.Title className="hamburger">
          <div className="icon" onClick={props.onHide}>
            <Glyphicon glyph="menu-hamburger" />
          </div>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {props.children}
      </Modal.Body>
    </Modal>
  );
};

export default Sidebar;
